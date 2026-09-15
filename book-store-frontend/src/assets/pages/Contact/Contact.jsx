import React from "react";
import "./contact.css";
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaClock,
  FaPaperPlane,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

function Contact() {
  return (
    <>
      <div className="bunner">
        <h1>اتصل بنا</h1>
      </div>

      <div className="container contact-page">

        <div className="contact-intro">
          <span>نحن هنا من أجلك</span>
          <h2>يسعدنا <strong>التواصل معك</strong></h2>
          <p>
            لديك سؤال، اقتراح، أو تحتاج إلى مساعدة؟
            أرسل لنا رسالتك وسنكون سعداء بالتواصل معك.
          </p>
        </div>

        <div className="row g-4 contact-content">

          <div className="col-lg-5">
            <div className="contact-info">

              <h3>معلومات التواصل</h3>
              <p className="contact-info-text">
                يمكنك التواصل معنا عبر أي من الوسائل التالية، وسنسعد
                دائماً بسماع رأيك واستفساراتك.
              </p>

              <div className="contact-item">
                <div>
                  <FaEnvelope />
                </div>
                <section>
                  <span>البريد الإلكتروني</span>
                  <p>info@maktabati.com</p>
                </section>
              </div>

              <div className="contact-item">
                <div>
                  <FaPhone />
                </div>
                <section>
                  <span>رقم الهاتف</span>
                  <p>000 000 555 90+</p>
                </section>
              </div>

              <div className="contact-item">
                <div>
                  <FaLocationDot />
                </div>
                <section>
                  <span>موقعنا</span>
                  <p>متواجدون لخدمتك دائماً</p>
                </section>
              </div>

              <div className="contact-item">
                <div>
                  <FaClock />
                </div>
                <section>
                  <span>أوقات التواصل</span>
                  <p>السبت - الخميس | 9:00 - 18:00</p>
                </section>
              </div>

              <div className="contact-social">
                <span>تابعنا أيضاً</span>

                <div>
                  <a href="#">
                    <FaFacebookF />
                  </a>

                  <a href="#">
                    <FaInstagram />
                  </a>

                  <a href="#">
                    <FaYoutube />
                  </a>
                </div>
              </div>

            </div>
          </div>

          <div className="col-lg-7">
            <div className="contact-form">

              <div className="contact-form-title">
                <FaPaperPlane />
                <div>
                  <h3>أرسل لنا رسالة</h3>
                  <p>سنكون سعداء بالاستماع إليك</p>
                </div>
              </div>

              <div className="row g-3">

                <div className="col-md-6">
                  <label>الاسم</label>
                  <input
                    type="text"
                    placeholder="اكتب اسمك"
                  />
                </div>

                <div className="col-md-6">
                  <label>البريد الإلكتروني</label>
                  <input
                    type="email"
                    placeholder="example@email.com"
                  />
                </div>

                <div className="col-12">
                  <label>الموضوع</label>
                  <input
                    type="text"
                    placeholder="موضوع الرسالة"
                  />
                </div>

                <div className="col-12">
                  <label>رسالتك</label>
                  <textarea
                    rows="6"
                    placeholder="اكتب رسالتك هنا..."
                  ></textarea>
                </div>

                <div className="col-12">
                  <button type="button">
                    <FaPaperPlane />
                    إرسال الرسالة
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

        <div className="contact-bottom">
          <h2>كل رسالة تبدأ بحكاية</h2>
          <p>
            شاركنا أفكارك واقتراحاتك، وربما تكون رسالتك بداية لفكرة جديدة.
          </p>
        </div>

      </div>
    </>
  );
}

export default Contact;