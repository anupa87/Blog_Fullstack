import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import BlogCard from "./BlogCard";
import Swal from "sweetalert2";
import axios from "axios";
import Popup from "./Popup";

const BlogList = () => {
  const title = useParams().title?.replaceAll("-", " ");
  const [blogList, setBlogList] = useState();
  const [filterList, setFilterList] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isPopup, setIsPopup] = useState(false);

  const fetchBlogList = () => {
    setIsLoading(true);
    axios
      .get("/api/blog")
      .then((response) => {
        setBlogList(response.data);
        setFilterList(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  const filterBlogs = () => {
    const newList = blogList?.filter((blog) => {
      return blog.title.toLowerCase().indexOf(title?.toLowerCase()) !== -1;
    });
    setFilterList(newList);
  };

  useEffect(() => {
    fetchBlogList();
  }, []);

  useEffect(() => {
    title ? filterBlogs() : setFilterList(blogList);
  }, [title, blogList]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to reverse this",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, please delete it",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`/api/blog/${id}`)
          .then(function (response) {
            Swal.fire({
              icon: "success",
              title: "Blog deleted successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            fetchBlogList();
          })
          .catch(function (error) {
            Swal.fire({
              icon: "error",
              title: "An error occurred",
              showConfirmButton: false,
              timer: 1500,
            });
          });
      }
    });
  };
  if (isLoading) {
    return <p>...Loading</p>;
  }

  return (
    <div className="all-blogs text-center py-5">
      <h4 className="mb-5 text-center">
        <strong>All Posts</strong>
      </h4>
      <div className="row">
      <ul className="blog-items pb-3">
        {filterList?.map((blog) => {
          return (
            <BlogCard blog={blog} handleDelete={handleDelete} key={blog.id} />
          );
        })}
        {isPopup && <Popup setIsPopup={setIsPopup} />}
      </ul>
      </div>
      <div className="d-flex flex-row justify-content-between">
        <Link className="btn btn-outline-info float-right" to="/create">
          Create New Blog
        </Link>
        <Link className="btn btn-outline-info float-right" to="/show">
          View all categories
        </Link>
      </div>
    </div>
  );
};
export default BlogList;
