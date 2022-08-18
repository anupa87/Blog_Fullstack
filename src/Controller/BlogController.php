<?php

namespace App\Controller;

use App\Entity\Blog;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

    #[Route('/api', name: 'api_main')] 
class BlogController extends AbstractController
{
    #[Route('/blog', name:'blog_index', methods:['GET'])]
    public function index(EntityManagerInterface $em): Response
    {
        $products =  $em->getRepository(Blog::class)->findAll();
        $data = [];
        foreach($products as $product) {
            $data[] = [
                'id' => $product->getId(),
                'title' => $product->getTitle(),
                'image' => $product->getImage(),
                'content' => $product->getContent(),
                'author' => $product->getAuthor()
            ];
        }
        return $this->json($data);
    }

    #[Route('/blog', name: 'blog_new', methods:['POST'])]

    public function new(Request $request,ManagerRegistry $doctrine):Response 
    {
        $em =  $doctrine->getManager();

        $project = new Blog();
        $project ->setTitle($request->request->get('title'));
        $project ->setImage($request->request->get('image'));
        $project ->setContent($request->request->get('content'));
        $project ->setAuthor($request->request->get('author'));
       
        $em->persist($project);

        $em->flush();

        return $this->json('Created new project successfully with id' . $project->getID());
    }

    #[Route('/blog/{id}', name: 'blog_show', methods:['GET'])]

    public function show(int $id, ManagerRegistry $doctrine):Response
    {

        $project = $doctrine->getRepository(Blog::class)-> find($id);
        if(!$project){
            return $this->json("No project found with the id" . $id, 404);
        }
        $data = [
            'id'=>$project->getId(),
            'title'=>$project->getTitle(),
            'image'=>$project->getImage(),
            'content'=>$project->getContent(),
            'author'=>$project->getAuthor(),
        ];

        return $this->json($data);
    }

    #[Route('/blog/{id}', name: 'blog_edit', methods:['PUT','PATCH'])]
    public function edit(Request $request,int $id, ManagerRegistry $doctrine): Response
    {
        $em =  $doctrine->getManager();

        $project = $em->getRepository(Blog::class)-> find($id);
        if(!$project){
            return $this->json("No project found with the id" . $id, 404);
        }
        $content = json_decode($request->getContent());
        $project ->setTitle($content->title);
        $project ->setImage($content->image);
        $project ->setContent($content->content);
        $project ->setAuthor($content->author);
       
        $em->flush();

        $data = [
            'id'=>$project->getId(),
            'title'=>$project->getTitle(),
            'image'=>$project->getImage(),
            'content'=>$project->getContent(),
            'author'=>$project->getAuthor(),
        ];
        return $this->json($data);

    }

    #[Route('/blog/{id}', name: 'blog_delete', methods:['Delete'])]
    public function delete(Request $request,int $id, ManagerRegistry $doctrine): Response
    {
        $em =  $doctrine->getManager();

        $project = $em->getRepository(Blog::class)-> find($id);
        if(!$project){
            return $this->json("No project found with the id" . $id, 404);
        }
        $em->remove($project);
        $em->flush();

        return $this->json('Deleted a project successfully with id' . $id);
}
}