import { useContext, useEffect } from "react";
import { QuickViewContext } from "../../context/QuickViewContext";
import { Link } from "react-router-dom";
import { FaBookOpen, FaCartPlus, FaHeart } from "react-icons/fa";
import React from "react";
import "./QuickViewModal.css";

function QuickViewModal() {
  const { selectedBook, closeQuickView } = useContext(QuickViewContext);

  useEffect(() => {
    if (selectedBook) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [selectedBook]);

  if (!selectedBook) return null;

  return (
    <>
      <div className="modal-backdrop fade show"></div>

      <div
        className="quick-modal modal fade show d-flex"
        onClick={closeQuickView}
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-content quick-modal-content">

            <div className="modal-header quick-modal-header">
              <h4 className="modal-title">{selectedBook.name}</h4>

              <button
                className="btn-close"
                type="button"
                onClick={closeQuickView}
              ></button>
            </div>

            <div className="modal-body quick-modal-body">

              <div className="quick-image">
                <img
                  src={`http://localhost:1337${selectedBook?.image?.url}`}
                  alt={selectedBook.name}
                />
              </div>

              <div className="quick-info">

                <span className="quick-category">
                  {selectedBook.categories?.[0]?.name}
                </span>

                <div className="quick-rating">
                  ⭐ {selectedBook.rating}
                  <small> ({selectedBook.review_count})</small>
                </div>

                <h2>{selectedBook.name}</h2>

                <p className="quick-author">
                  ✍️ {selectedBook.author?.name}
                </p>

                <p className="quick-description">
                  {selectedBook.description}
                </p>

                <div className="quick-bottom">

                  <span className="quick-price">
                    {selectedBook.price} ريال
                  </span>

                  <span
                    className={
                      selectedBook.available
                        ? "quick-available"
                        : "quick-unavailable"
                    }
                  >
                    {selectedBook.available ? "متوفر" : "غير متوفر"}
                  </span>

                </div>

                <div className="quick-actions">

                  <Link
                    to={`/book/${selectedBook.documentId}`}
                    className="quick-details-btn"
                    onClick={closeQuickView}
                  >
                    <FaBookOpen />
                    تفاصيل الكتاب
                  </Link>

                  <button className="quick-icon-btn">
                    <FaHeart />
                  </button>

                  <button className="quick-icon-btn">
                    <FaCartPlus />
                  </button>

                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default QuickViewModal;