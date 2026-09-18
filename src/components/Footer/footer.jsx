import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer" dir="rtl">

      <div className="footer-container">

        <div className="footer-column footer-about">

          <div className="footer-logo">
            <div className="footer-logo-icon">
              ع
            </div>

            <strong>
              عدسة
            </strong>
          </div>

          <p>
            مدونة متخصصة في فن التصوير الفوتوغرافي،
            نشارك معك أسرار المحترفين ونصائح عملية
            لتطوير مهاراتك.
          </p>

          <div className="social-links">
            <span>▶</span>
            <span>in</span>
            <span>◎</span>
            <span>𝕏</span>
          </div>

        </div>


        <div className="footer-column">

          <h3>
            استكشف
          </h3>

          <Link to="/">
            الرئيسية
          </Link>

          <Link to="/blog">
            المدونة
          </Link>

          <Link to="/about">
            من نحن
          </Link>

        </div>


        <div className="footer-column">

          <h3>
            التصنيفات
          </h3>

          <a href="#">إضاءة</a>
          <a href="#">بورتريه</a>
          <a href="#">مناظر طبيعية</a>
          <a href="#">تقنيات</a>

        </div>


        <div className="footer-column">

          <h3>
            ابق على اطلاع
          </h3>

          <p>
            اشترك للحصول على أحدث المقالات والتحديثات.
          </p>

          <div className="footer-input">
            <input placeholder="أدخل بريدك الإلكتروني" />
            <button>اشترك</button>
          </div>

        </div>

      </div>


      <div className="footer-bottom">
        جميع الحقوق محفوظة © 2026 عدسة
      </div>

    </footer>
  );
}

export default Footer;