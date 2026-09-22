import React from "react";
import "./CategoryStyle.css";
import { Link } from "react-router-dom";

function Category({ category }) {
  const imgUrl = category.image?.url?.startsWith("http")
    ? category.image.url
    : `https://book-store-bkc3.onrender.com${category.image?.url}`;

  return (
    <div className="category col mt-3">
      <Link className="catLink" to={`/category/${category.id}`}>
        <div className="img-cat mt-3" style={{ position: "relative" }}>
          {category.image && (
            <img width="100%" src={imgUrl} alt={category.name} />
          )}

          <div className="cat-overlay">
            <p>إستمتع بقراءة {category.name}</p>

            <span className="btn-cat">للمتابعة</span>
          </div>
        </div>

        <h5 className="text-center mt-2">{category.name}</h5>
      </Link>
    </div>
  );
}

export default Category;
