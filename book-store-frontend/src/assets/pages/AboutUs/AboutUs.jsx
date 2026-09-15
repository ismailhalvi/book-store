import React from "react";
import "./Aboutus.css";
import {
  FaBookOpen,
  FaUsers,
  FaPenNib,
  FaHeart,
  FaStar,
  FaQuoteRight,
} from "react-icons/fa";

function AboutUs() {
  return (
    <div className="about-page">

      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-small-title">مكتبتي</span>

          <h1>من نحن</h1>

          <p>
            أكثر من مجرد مكتبة...
            <br />
            إنها مساحة تبدأ فيها كل حكاية.
          </p>
        </div>

        <div className="about-hero-book">
          <FaBookOpen />
        </div>

        <div className="about-decoration about-decoration-one">✦</div>
        <div className="about-decoration about-decoration-two">✧</div>
      </section>

      {/* Introduction */}
      <section className="about-introduction container">

        <div className="about-intro-text">
          <span className="about-label">قصتنا</span>

          <h2>
            نفتح لك باباً
            <br />
            <strong>لعالم من المعرفة</strong>
          </h2>

          <p>
            مرحباً بك في مكتبتي، المكان الذي يجتمع فيه شغف القراءة مع
            حب المعرفة واكتشاف القصص الجديدة.
          </p>

          <p>
            أنشأنا هذه المنصة لتكون تجربة سهلة وممتعة تساعدك على اكتشاف
            الكتب التي تناسب اهتماماتك، سواء كنت من محبي الروايات والأدب،
            أو شغوفاً بالتاريخ والعلوم والبرمجة والتنمية الذاتية.
          </p>

          <p>
            نؤمن أن الكتاب الجيد يمكن أن يغيّر فكرة، ويصنع تجربة،
            ويفتح أمام القارئ عالماً لم يكن يعرفه من قبل.
          </p>
        </div>

        <div className="about-intro-card">
          <FaBookOpen />

          <span>اقرأ أكثر</span>

          <h3>اكتشف أكثر</h3>

          <p>
            كل صفحة تحمل فكرة،
            وكل كتاب يحمل رحلة جديدة.
          </p>

          <div className="about-stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>

      </section>

      {/* Features */}
      <section className="about-features container">

        <div className="about-section-title">
          <span>لماذا مكتبتي؟</span>
          <h2>تجربة صُممت <strong>لعشاق الكتب</strong></h2>
          <p>
            كل ما تحتاجه لتكتشف كتابك القادم في مكان واحد.
          </p>
        </div>

        <div className="row g-4">

          <div className="col-lg-3 col-md-6">
            <div className="about-feature-card">
              <div className="about-feature-icon">
                <FaBookOpen />
              </div>

              <h3>تنوع الكتب</h3>

              <p>
                اكتشف مجموعة متنوعة من الكتب في الأدب والتاريخ والعلوم
                والبرمجة وغيرها.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="about-feature-card">
              <div className="about-feature-icon">
                <FaUsers />
              </div>

              <h3>لكل قارئ</h3>

              <p>
                محتوى متنوع يناسب مختلف الاهتمامات ويساعدك على العثور
                على ما تبحث عنه.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="about-feature-card">
              <div className="about-feature-icon">
                <FaPenNib />
              </div>

              <h3>كتّاب مميزون</h3>

              <p>
                تعرف على أعمال كتّاب من مجالات مختلفة واكتشف أفكارهم
                وتجاربهم.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="about-feature-card">
              <div className="about-feature-icon">
                <FaHeart />
              </div>

              <h3>شغف بالقراءة</h3>

              <p>
                هدفنا أن نجعل اكتشاف الكتب والقراءة تجربة ممتعة
                وبسيطة للجميع.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Statistics */}
      <section className="about-statistics">
        <div className="container">
          <div className="row g-4">

            <div className="col-md-3 col-6">
              <div className="about-stat">
                <FaBookOpen />
                <strong>230+</strong>
                <span>كتاب</span>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="about-stat">
                <FaUsers />
                <strong>2400+</strong>
                <span>قارئ</span>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="about-stat">
                <FaPenNib />
                <strong>300+</strong>
                <span>كاتب</span>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="about-stat">
                <FaHeart />
                <strong>4000+</strong>
                <span>مهتم بالقراءة</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="about-quote container">
        <div className="about-quote-icon">
          <FaQuoteRight />
        </div>

        <h2>
          "الكتاب ليس مجرد صفحات...
          <br />
          بل رحلة تبدأ من أول سطر."
        </h2>

        <span>— مكتبتي</span>
      </section>

      {/* Mission */}
      <section className="about-mission container">

        <div>
          <span className="about-label">رؤيتنا</span>

          <h2>
            نريد أن نجعل
            <strong> القراءة أقرب إليك</strong>
          </h2>

          <p>
            نسعى لبناء مساحة تجمع محبي الكتب وتساعدهم على اكتشاف
            المعرفة والقصص والأفكار بطريقة بسيطة وجميلة.
          </p>
        </div>

        <FaHeart />

      </section>

    </div>
  );
}

export default AboutUs;