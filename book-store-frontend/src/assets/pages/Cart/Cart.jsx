import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../../store/cartSlice";

import { FaShoppingCart, FaTrash } from "react-icons/fa";
import "./CartStyle.css";

function Cart() {
  const dispatch = useDispatch();

  const { cartItems } = useSelector(
    (state) => state.cart
  );

  const cartTotal = cartItems.reduce(
    (total, item) =>
      total + Number(item.price || 0) * item.quantity,
    0
  );

  return (
    <div className="cart-page container py-5">
      <div className="cart-page-header">
        <h2>سلة المشتريات 🛒</h2>
        <p>راجع الكتب التي أضفتها إلى سلتك</p>
      </div>

      {cartItems.length === 0 ? (
        <div className="cart-page-empty">
          <FaShoppingCart />

          <h4>السلة فارغة حالياً</h4>

          <p>
            لم تقم بإضافة أي كتب إلى السلة بعد.
          </p>

          <Link
            to="/"
            className="btn btn-primary"
          >
            متابعة التسوق
          </Link>
        </div>
      ) : (
        <div className="row g-4">

          {/* Cart Items */}
          <div className="col-lg-8">
            <div className="cart-page-items">
              {cartItems.map((item) => {
                const itemImage = `http://localhost:1337${item.image?.url}`;

                return (
                  <div
                    className="cart-page-item"
                    key={item.id}
                  >
                    <img
                      className="cart-page-item-img"
                      src={itemImage}
                      alt={item.name}
                    />

                    <div className="cart-page-item-info">
                      <h5>{item.name}</h5>

                      <p className="cart-page-item-price">
                        {item.price} ريال
                      </p>

                      <div className="cart-page-item-controls">
                        <button
                          type="button"
                          onClick={() =>
                            dispatch(
                              decreaseQuantity(item.id)
                            )
                          }
                        >
                          -
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          type="button"
                          onClick={() =>
                            dispatch(
                              increaseQuantity(item.id)
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="cart-page-item-total">
                      <strong>
                        {Number(item.price || 0) *
                          item.quantity}{" "}
                        ريال
                      </strong>

                      <button
                        type="button"
                        className="cart-page-remove-btn"
                        onClick={() =>
                          dispatch(
                            removeFromCart(item.id)
                          )
                        }
                        aria-label="حذف الكتاب من السلة"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cart Summary */}
          <div className="col-lg-4">
            <div className="cart-page-summary">
              <h4>ملخص الطلب</h4>

              <div className="cart-page-summary-row">
                <span>عدد الكتب</span>
                <span>{cartItems.length}</span>
              </div>

              <div className="cart-page-summary-row">
                <span>المجموع</span>
                <strong>{cartTotal} ريال</strong>
              </div>

              <div className="cart-page-summary-divider"></div>

              <div className="cart-page-summary-total">
                <span>الإجمالي النهائي</span>
                <strong>{cartTotal} ريال</strong>
              </div>

              <button
                type="button"
                className="btn btn-success w-100 mt-4"
              >
                إتمام الطلب
              </button>

              <Link
                to="/"
                className="btn btn-outline-secondary w-100 mt-2"
              >
                متابعة التسوق
              </Link>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}

export default Cart;