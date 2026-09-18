import { Link } from "react-router-dom";
import data from "../data/data.json";
import BlogCard from "../components/BlogCard";

function Home() {
  const featuredPosts = data.posts.filter((post) => post.featured);

  return (
    <main className="home-page" dir="rtl">

      {/* HERO */}
      <section className="hero">

        <div className="hero-grid"></div>

        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>

        <div className="hero-content">

          <div className="hero-badge">
            <span></span>
            مرحباً بك في عدسة
            <span></span>
          </div>

          <h1>
            اكتشف عالم
            <br />
            <span>فن</span> التصوير الفوتوغرافي
          </h1>

          <p>
            نصائح وتقنيات وأسرار المصورين تساعدك على تطوير مهاراتك
            والتقاط صور تحكي قصة.
          </p>

          <div className="hero-actions">

            <Link to="/blog" className="primary-btn">
              استكشف المقالات
              <span>←</span>
            </Link>

            <Link to="/blog" className="secondary-btn">
              <span>ⓘ</span>
              اعرف المزيد
            </Link>

          </div>

        </div>
      </section>


      {/* STATS */}
      <section className="stats-section">

        <div className="stats-container">

          <div className="stat-card">
            <strong>50+</strong>
            <span>مقالة</span>
          </div>

          <div className="stat-card">
            <strong>10+</strong>
            <span>قارئ</span>
          </div>

          <div className="stat-card">
            <strong>4</strong>
            <span>تصنيفات</span>
          </div>

          <div className="stat-card">
            <strong>6</strong>
            <span>كتاب</span>
          </div>

        </div>

      </section>


      {/* FEATURED POSTS */}
      <section className="featured-section">

        <div className="featured-heading">

          <div>
            <span className="section-small-title">
              محتوى منتقى لبدء رحلة تعلمك
            </span>

            <h2>مقالات مختارة</h2>
          </div>

          <Link to="/blog" className="view-all">
            عرض الكل
            <span>←</span>
          </Link>

        </div>


        <div className="posts-list">

          {featuredPosts.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
            />
          ))}

        </div>

      </section>
      {/* NEWSLETTER */}

<section className="newsletter-section">

  <div className="newsletter-box">

    <div className="newsletter-icon">
      ✉
    </div>

    <h2>
      اشترك في <span>نشرتنا الإخبارية</span>
    </h2>

    <p>
      احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
    </p>

    <div className="newsletter-form">

      <input
        type="email"
        placeholder="أدخل بريدك الإلكتروني"
      />

      <button>
        اشترك الآن
      </button>

    </div>

    <div className="newsletter-info">
      <span>انضم لأكثر من <b>10,000+</b> مصور</span>
      <span>بدون إزعاج</span>
      <span>إلغاء الاشتراك في أي وقت</span>
    </div>

  </div>

</section>
    </main>
  );
}

export default Home;