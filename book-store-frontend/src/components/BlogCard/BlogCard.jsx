import React from "react";
import "./BlogCardStyle.css";

function BlogCard({ blog }) {
  const BlogImg = `http://https://book-store-bkc3.onrender.com${blog.image?.url}`;

  return (
    <div className="blog-card">
      <span className="blog-span">{blog.category_blog.name}</span>
      <div className="blog-img">
        <img className="" width="100%" src={BlogImg} alt="" />
      </div>
      <div className="blog-details ">
        <div className="d-flex justify-content-between ">
          <span className="blog-date">
            {new Date(blog.createdAt).toLocaleDateString()}{" "}
          </span>
          <span className="blog-author">{blog.author.name}</span>
        </div>
        <hr />
        <h3 className="blog-h3"> {blog.title}</h3>
        <p className="blog-p">{blog.description.substring(0, 70)}...</p>
        <button className="blog-btn bookDetails-btn mt-2 text-center w-100 btn btn-success">
          المزيد
        </button>
      </div>
    </div>
  );
}

export default BlogCard;
