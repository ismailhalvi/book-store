import React from "react";
import { FaFacebookF } from "react-icons/fa";
import "./AuthStyle.css";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
function Author({ author }) {
  const AuthorImg = `http://localhost:1337${author.image?.url}`;
  return (
    <div className="author col  mb-3">
      <Link to={`/author/${author.documentId}`}>
        <div className="img-auth">
          <img className="" width="100%" src={AuthorImg} alt="" />
        </div>
        <div className="details">
          <h3 className="auth-h3">{author.name}</h3>
          <p className="auth-p">{author.description.substring(0, 100)}</p>
          <div className="icons  ">
        <span>
  <FaFacebookF />
</span>

<span>
  <FaInstagram />
</span>

<span>
  <FaXTwitter />
</span>

<span>
  <FaYoutube />
</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Author;
