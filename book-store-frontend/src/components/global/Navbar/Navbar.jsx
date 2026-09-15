import { navLinks } from "../../../data/links";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  removeFromWishlist,
} from "../../../store/cartSlice";

import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";

import api from "../../../api";
import "./NavbarStyle.css";

function Navbar() {
  const [query, setQuery] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cartItems, wishlistItems } = useSelector((state) => state.cart);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const cartTotal = cartItems.reduce(
    (total, item) => total + Number(item.price || 0) * item.quantity,
    0,
  );

  const wishlistCount = wishlistItems.length;

  useEffect(() => {
    const timeout = setTimeout(() => {
      const clearQuery = query.trim();

      if (clearQuery) {
        navigate(`/search?q=${clearQuery}`);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [query, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    const cleanEmail = email.trim();

    if (!cleanEmail || !password) {
      setMessage("الرجاء إدخال البريد الإلكتروني وكلمة المرور");
      return;
    }

    try {
      setIsLoading(true);
      setMessage("");

      const response = await api.post("/auth/local", {
        identifier: cleanEmail,
        password: password,
      });

      console.log("LOGIN RESPONSE:", response.data);

      localStorage.setItem("jwt", response.data.jwt);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      setMessage("تم تسجيل الدخول بنجاح ✅");
    } catch (error) {
      console.log("LOGIN ERROR:", error.response?.data);

      setMessage(
        error.response?.data?.error?.message ||
          "البريد الإلكتروني أو كلمة المرور غير صحيحة",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="navbar-style shadow-sm">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* Logo */}
            <a className="navbar-brand" href="/">
              <img
                width="50px"
                src={`${import.meta.env.BASE_URL}Logo.png`}
                alt="Logo"
              />
            </a>
            {/* Mobile */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {/* Links */}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {navLinks.map((link) => {
                  return (
                    <li key={link.id} className="nav-item">
                      <Link className="nav-link" to={link.link}>
                        {link.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Search */}
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="البحث عن كتاب..."
                  aria-label="Search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </form>

              {/* Navbar Actions */}
              <div className="navbar-actions">
                {/* Login */}
                <button
                  type="button"
                  className="navbar-action-btn"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#loginOffcanvas"
                  aria-controls="loginOffcanvas"
                  aria-label="تسجيل الدخول"
                >
                  <FaUser />
                </button>

                {/* Wishlist */}
                <button
                  type="button"
                  className="navbar-action-btn"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#wishlistOffcanvas"
                  aria-controls="wishlistOffcanvas"
                  aria-label="المفضلة"
                >
                  <FaHeart />

                  {wishlistCount > 0 && (
                    <span className="navbar-badge">{wishlistCount}</span>
                  )}
                </button>

                {/* Cart */}
                <button
                  type="button"
                  className="navbar-action-btn"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#cartOffcanvas"
                  aria-controls="cartOffcanvas"
                  aria-label="سلة المشتريات"
                >
                  <FaShoppingCart />

                  {cartCount > 0 && (
                    <span className="navbar-badge">{cartCount}</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Login Offcanvas */}
      <div
        className="offcanvas offcanvas-end login-offcanvas"
        tabIndex="-1"
        id="loginOffcanvas"
        aria-labelledby="loginOffcanvasLabel"
      >
        <div className="offcanvas-header login-offcanvas-header">
          <h5 className="offcanvas-title" id="loginOffcanvasLabel">
            تسجيل الدخول
          </h5>

          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="إغلاق"
          ></button>
        </div>

        <div className="offcanvas-body login-offcanvas-body">
          <div className="login-icon">
            <FaUser />
          </div>

          <h4>أهلاً بعودتك 👋</h4>

          <p className="login-description">
            سجّل الدخول للوصول إلى حسابك ومتابعة مشترياتك بسهولة.
          </p>

          <form className="login-form" onSubmit={handleLogin}>
            <div className="login-field">
              <label htmlFor="loginEmail">البريد الإلكتروني</label>

              <input
                id="loginEmail"
                type="email"
                className="form-control"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="login-field">
              <label htmlFor="loginPassword">كلمة المرور</label>

              <input
                id="loginPassword"
                type="password"
                className="form-control"
                placeholder="أدخل كلمة المرور"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="login-options">
              <label className="login-remember">
                <input type="checkbox" />
                <span>تذكرني</span>
              </label>

              <button type="button" className="login-forgot-btn">
                نسيت كلمة المرور؟
              </button>
            </div>

            <button
              type="submit"
              className="login-submit-btn"
              disabled={isLoading}
            >
              {isLoading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
            </button>
          </form>

          {message && <p className="login-message">{message}</p>}

          <div className="login-divider">
            <span>أو</span>
          </div>

          <div className="login-register">
            <p>ليس لديك حساب؟</p>

            <button type="button" className="login-register-btn">
              إنشاء حساب
            </button>
          </div>
        </div>
      </div>

      {/* Wishlist Offcanvas */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="wishlistOffcanvas"
        aria-labelledby="wishlistOffcanvasLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="wishlistOffcanvasLabel">
            المفضلة ❤️
          </h5>

          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="إغلاق"
          ></button>
        </div>

        <div className="offcanvas-body wishlist-offcanvas-body">
          {wishlistItems.length === 0 ? (
            <div className="empty-wishlist">
              <FaHeart />
              <p>المفضلة فارغة حالياً</p>
              <span>أضف الكتب التي تعجبك لتظهر هنا.</span>
            </div>
          ) : (
            <>
              <div className="wishlist-items">
                {wishlistItems.map((item) => {
                  const itemImage = `http://localhost:1337${item.image?.url}`;

                  return (
                    <div className="wishlist-item" key={item.id}>
                      <img
                        className="wishlist-item-img"
                        src={itemImage}
                        alt={item.name}
                      />

                      <div className="wishlist-item-info">
                        <h6>{item.name}</h6>

                        <p>{item.price} ريال</p>

                        <Link
                          to={`/book/${item.documentId}`}
                          className="wishlist-details-link"
                          data-bs-dismiss="offcanvas"
                        >
                          عرض التفاصيل
                        </Link>
                      </div>

                      <button
                        type="button"
                        className="wishlist-item-remove"
                        onClick={() => dispatch(removeFromWishlist(item.id))}
                        aria-label="إزالة الكتاب من المفضلة"
                      >
                        ×
                      </button>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Cart Offcanvas */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="cartOffcanvas"
        aria-labelledby="cartOffcanvasLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="cartOffcanvasLabel">
            سلة المشتريات 🛒
          </h5>

          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="إغلاق"
          ></button>
        </div>

        <div className="offcanvas-body cart-offcanvas-body">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <FaShoppingCart />
              <p>السلة فارغة حالياً</p>
              <span>أضف بعض الكتب لتظهر هنا.</span>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map((item) => {
                  const itemImage = `http://localhost:1337${item.image?.url}`;

                  return (
                    <div className="cart-item" key={item.id}>
                      <img
                        className="cart-item-img"
                        src={itemImage}
                        alt={item.name}
                      />

                      <div className="cart-item-info">
                        <h6>{item.name}</h6>

                        <p>{item.price} ريال</p>

                        <div className="cart-item-controls">
                          <button
                            type="button"
                            onClick={() => dispatch(decreaseQuantity(item.id))}
                          >
                            -
                          </button>

                          <span>{item.quantity}</span>

                          <button
                            type="button"
                            onClick={() => dispatch(increaseQuantity(item.id))}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="cart-item-remove"
                        onClick={() => dispatch(removeFromCart(item.id))}
                        aria-label="حذف الكتاب"
                      >
                        ×
                      </button>
                    </div>
                  );
                })}
              </div>

              <div className="cart-offcanvas-footer">
                <div className="cart-total">
                  <span>المجموع:</span>
                  <strong>{cartTotal} ريال</strong>
                </div>

                <Link to="/cart" className="btn btn-primary w-100">
                  عرض السلة كاملة
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
