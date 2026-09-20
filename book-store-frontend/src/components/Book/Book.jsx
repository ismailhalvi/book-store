import React from "react";
import "./BookStyle.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { QuickViewContext } from "../../context/QuickViewContext";
import { useDispatch } from "react-redux";
import { addToCart, toggleWishlist } from "../../store/cartSlice";
import { IoIosSearch } from "react-icons/io";
import { FaHeart, FaCartPlus, FaShoppingCart } from "react-icons/fa";

function Book({ book }) {
  const { openQuickView } = useContext(QuickViewContext);
  const dispatch = useDispatch();

  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const imgUrl = `https://book-store-bkc3.onrender.com${book.image?.url}`;
  const BackimgUrl = `https://book-store-bkc3.onrender.com${book.Backimg?.url}`;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(addToCart(book));
    setIsAddedToCart(true);
  };

  const handleOpenCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const cartOffcanvasElement = document.getElementById("cartOffcanvas");

    if (cartOffcanvasElement && window.bootstrap) {
      const cartOffcanvas =
        window.bootstrap.Offcanvas.getOrCreateInstance(cartOffcanvasElement);

      cartOffcanvas.show();
    }
  };

  return (
    <div className="book col mt-3">
      <Link className="bookLink" to={`/book/${book.documentId}`}>
        <div className="bookIImg">
          <img className="bookImg" src={imgUrl} alt="bookImg" />

          <div className="bookimg2">
            <img className="bookImg" src={BackimgUrl} alt="bookImg" />
          </div>

          <div className="book-icons">
            {/* فتح تفاصيل الكتاب داخل Quick View */}
            <IoIosSearch
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                openQuickView(book);
              }}
              style={{
                fontSize: "25px",
                color: "white",
              }}
            />

            {/* إضافة إلى المفضلة */}
            <FaHeart
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                dispatch(toggleWishlist(book));
              }}
              style={{
                fontSize: "22px",
                color: "white",
              }}
            />

            {/* إضافة إلى السلة */}
            <FaCartPlus
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                dispatch(addToCart(book));
                setIsAddedToCart(true);
              }}
              style={{
                fontSize: "22px",
                color: "white",
              }}
            />
          </div>
        </div>

        <div className="bookDetails">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="bookCategory">{book.categories?.[0]?.name}</span>

            <div className="bookRating">
              ⭐ {book.rating}
              <small>({book.review_count})</small>
            </div>
          </div>

          <h5 className="bookTitle">{book.name}</h5>

          <p className="bookAuthor">✍️ {book.author?.name}</p>

          <p className="bookDescription">{book.shoer_description}</p>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <span className="bookPriceTitle">
              السعر:
              <span className="bookPrice"> {book.price} ريال</span>
            </span>

            <span
              className={book.available ? "bookAvailable" : "bookUnavailable"}
            >
              {book.available ? "متوفر" : "غير متوفر"}
            </span>
          </div>

          <button
            type="button"
            className="bookDetails-btn mt-3 text-center w-100 btn btn-success"
          >
            تفاصيل الكتاب
          </button>

          {/* زر إضافة أو عرض السلة */}
          {!isAddedToCart ? (
            <button
              type="button"
              className="mt-2 text-center w-100 btn btn-primary"
              onClick={handleAddToCart}
            >
              <FaCartPlus className="ms-2" />
              إضافة إلى السلة
            </button>
          ) : (
            <button
              type="button"
              className="mt-2 text-center w-100 btn btn-warning"
              onClick={handleOpenCart}
            >
              <FaShoppingCart className="ms-2" />
              عرض السلة
            </button>
          )}
        </div>
      </Link>
    </div>
  );
}

export default Book;
