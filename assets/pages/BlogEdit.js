import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import BlogForm from "./BlogForm";

const BlogEdit = () => {
  const id = useParams().id;
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const fetchBlog = () => {
    axios
      .get(`/api/blog/${id}`)
      .then((response) => {
        const blog = response.data;
        setTitle(blog.title);
        setImage(blog.image);
        setContent(blog.content);
        setAuthor(blog.author);
      })
      .catch((err) => console.log(err));
  };

  const handleSave = () => {
    setIsSaving(true);
    axios
      .patch(`/api/blog/${id}`, {
        title: title,
        image: image,
        content: content,
        author: author,
      })
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "Project saved successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsSaving(false);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "An error occurred",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsSaving(false);
      });
  };

  useEffect(() => {
    fetchBlog();
  }, []);
  return (
    <div className="container text-center ">
      <h1 className="m-4">Edit Blog</h1>
      <div className="card">
        <BlogForm
          title={title}
          image={image}
          content={content}
          author={author}
          setTitle={setTitle}
          setImage={setImage}
          setContent={setContent}
          setAuthor={setAuthor}
          handleSave={handleSave}
          isSaving={isSaving}
          buttonName="Update Blog"
        />
      </div>
      <div className="mt-5">
        <Link className="btn btn-primary float-right" to={`/show/${id}`}>
          View Blog
        </Link>
      </div>
    </div>
  );
};

export default BlogEdit;
