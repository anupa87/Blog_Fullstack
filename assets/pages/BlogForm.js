import React from "react";

const BlogForm = ({
  title,
  image,
  content,
  author,
  setTitle,
  setImage,
  setContent,
  setAuthor,
  handleSave,
  isSaving,
  buttonName,
}) => {
  return (
    <div className="ms-1">
      <form className="py-5 " style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        <div className="body-group ms-5 ps-5">
          <label htmlFor="title">Title</label>
          <input
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            value={title}
            type="text"
            className="form-control w-75 "
            id="title"
            name="title"
            required
          />
        </div>
        <div className="form-group w-75 ms-5 ps-5">
          <label htmlFor="image">Image URL</label>
          <input
            onChange={(event) => {
              setImage(event.target.value);
            }}
            value={image}
            type="text"
            className="form-control"
            id="image"
            name="image"
            required
          />
        </div>
        <div className="form-group w-75 ms-5 ps-5">
          <label htmlFor="content">Content</label>
          <textarea
            onChange={(event) => {
              setContent(event.target.value);
            }}
            value={content}
            className="form-control"
            id="content"
            rows="3"
            name="content"
            required
          ></textarea>
        </div>
        <div className="form-group w-75 ms-5 ps-5">
          <label htmlFor="author">Author</label>
          <input
            onChange={(event) => {
              setAuthor(event.target.value);
            }}
            value={author}
            type="text"
            className="form-control"
            id="author"
            name="author"
            required
          />
        </div>
        <div className="text-center">
          <button
            disabled={false}
            onClick={handleSave}
            type="submit"
            className="btn btn-primary mt-3 text-center"
          >
            {buttonName}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;
