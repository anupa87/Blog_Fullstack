import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import BlogForm from "./BlogForm";

const BlogCreate = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [isSaving, setIsSaving] = useState("false");

  const handleSave = () => {
    if (title && image && content && author) {
      setIsSaving(true);
      let formData = new FormData();
      formData.append("title", title);
      formData.append("image", image);
      formData.append("content", content);
      formData.append("author", author);

      axios
        .post("/api/blog", formData)
        .then(function (response) {
          Swal.fire({
            icon: "success",
            title: "Project saved successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          setIsSaving(false);
          setTitle("");
          setImage("");
          setContent("");
          setAuthor("");
        })
        .catch(function (error) {
          Swal.fire({
            icon: "error",
            title: "An error occurred",
            showConfirmButton: false,
            timer: 1500,
          });
          setIsSaving(false);
        });
    }
  };
  return (
    <div className="container">
      <h2 className="text-center p-5">Write New Blog</h2>
      <div className="form bg-sucess">
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
          buttonName="Create Blog"
        />
      </div>
      <div className="box-footer py-5">
        <Link className="btn btn-outline-success float-start mt-3" to="/">
          Write New
        </Link>
        <Link className="btn btn-outline-success float-end mt-3" to="/">
          Homepage
        </Link>
      </div>
    </div>
  );
};

export default BlogCreate;
