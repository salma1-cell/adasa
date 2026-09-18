import { useState } from "react";
import data from "../data/data.json";
import BlogCard from "../components/BlogCard";

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("جميع المقالات");
  const [search, setSearch] = useState("");
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 6;

  const categories = [
    "جميع المقالات",
    "إضاءة",
    "بورتريه",
    "مناظر طبيعية",
    "تقنيات",
    "معدات",
  ];

  const filteredPosts = data.posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "جميع المقالات" ||
      post.category === selectedCategory;

    const searchText = search.toLowerCase();

    const matchesSearch =
      post.title.toLowerCase().includes(searchText) ||
      post.excerpt.toLowerCase().includes(searchText);

    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(
    filteredPosts.length / postsPerPage
  );

  const startIndex =
    (currentPage - 1) * postsPerPage;

  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  function handleCategory(category) {
    setSelectedCategory(category);
    setCurrentPage(1);
  }

  function handleSearch(e) {
    setSearch(e.target.value);
    setCurrentPage(1);
  }

  return (
    <main className="blog-page" dir="rtl">

      {/* =========================
          TOP BACKGROUND
      ========================= */}

      <section className="blog-top">

        <div className="blog-grid-background"></div>

      </section>


      {/* =========================
          FILTER BAR
      ========================= */}

      <section className="filter-section">

        <div className="filter-container">

          {/* SEARCH */}

          <div className="blog-search">

            <input
              type="text"
              placeholder="إبحث في المقالات..."
              value={search}
              onChange={handleSearch}
            />

            <span>⌕</span>

          </div>


          {/* CATEGORIES */}

          <div className="category-filters">

            {categories.map((category) => (

              <button
                key={category}
                className={
                  selectedCategory === category
                    ? "category-filter active"
                    : "category-filter"
                }
                onClick={() => handleCategory(category)}
              >
                {category}
              </button>

            ))}

          </div>

        </div>

      </section>


      {/* =========================
          ARTICLES
      ========================= */}

      <section className="articles-section">

        <div className="articles-header">

          <span>
            عرض {filteredPosts.length} مقالات
          </span>


          <div className="view-buttons">

            <button
              className={view === "list" ? "active" : ""}
              onClick={() => setView("list")}
            >
              ☰
            </button>

            <button
              className={view === "grid" ? "active" : ""}
              onClick={() => setView("grid")}
            >
              ▦
            </button>

          </div>

        </div>


        {/* POSTS */}

        {currentPosts.length > 0 ? (

          <div
            className={
              view === "grid"
                ? "blog-grid"
                : "blog-grid list-view"
            }
          >

            {currentPosts.map((post) => (

              <BlogCard
                key={post.id}
                post={post}
              />

            ))}

          </div>

        ) : (

          <div className="no-results">
            <h2>لا توجد مقالات</h2>

            <p>
              جربي البحث بكلمة مختلفة أو اختاري تصنيف آخر.
            </p>
          </div>

        )}


        {/* =========================
            PAGINATION
        ========================= */}

        {totalPages > 1 && (

          <div className="pagination">

            <button
              disabled={currentPage === 1}
              onClick={() =>
                setCurrentPage(currentPage - 1)
              }
            >
              ‹
            </button>


            {Array.from(
              { length: totalPages },
              (_, index) => index + 1
            ).map((page) => (

              <button
                key={page}
                className={
                  currentPage === page
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setCurrentPage(page)
                }
              >
                {page}
              </button>

            ))}


            <button
              disabled={currentPage === totalPages}
              onClick={() =>
                setCurrentPage(currentPage + 1)
              }
            >
              ›
            </button>

          </div>

        )}

        <p className="page-number">
          صفحة {currentPage} من {totalPages}
        </p>

      </section>

    </main>
  );
}

export default Blog;