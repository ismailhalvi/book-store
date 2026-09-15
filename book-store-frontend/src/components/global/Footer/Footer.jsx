import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaBookOpen,
  FaEnvelope,
  FaPhone,
  FaLocationDot
} from "react-icons/fa6";
import "./FooterStyle.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-main">

          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <FaBookOpen />
              <span>مكتبتي</span>
            </div>

            <p>
              عالم من الكتب والمعرفة بين يديك.
              اكتشف كتابك القادم وابدأ رحلة جديدة بين الصفحات.
            </p>

            <div className="footer-social">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaXTwitter /></a>
              <a href="#"><FaYoutube /></a>
            </div>
          </div>


          {/* Links */}
          <div className="footer-column">
            <h4>روابط سريعة</h4>

            <Link to="/">الرئيسية</Link>
            <Link to="/books">كافة الكتب</Link>
            <Link to="/categories">التصنيفات</Link>
            <Link to="/about">من نحن</Link>
            <Link to="/contact">اتصل بنا</Link>
          </div>


          {/* Categories */}
          <div className="footer-column">
            <h4>استكشف</h4>

            <Link to="/categories">كتب البرمجة</Link>
            <Link to="/categories">كتب التاريخ</Link>
            <Link to="/categories">الأدب والروايات</Link>
            <Link to="/categories">كتب العلوم</Link>
            <Link to="/categories">التنمية الذاتية</Link>
          </div>


          {/* Contact */}
          <div className="footer-column footer-contact">
            <h4>تواصل معنا</h4>

            <div>
              <FaEnvelope />
              <span>info@maktabati.com</span>
            </div>

            <div>
              <FaPhone />
              <span>+90 555 000 0000</span>
            </div>

            <div>
              <FaLocationDot />
              <span>متاحون لخدمتك دائماً</span>
            </div>
          </div>

        </div>


        {/* Bottom */}
        <div className="footer-bottom">

          <span>
            © 2026 مكتبيتي — جميع الحقوق محفوظة
          </span>

          <span>
            صُنع بـ <span className="heart">♥</span> لعشاق القراءة
          </span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;