import { Link } from "react-router-dom";

function BlogCard({ post }) {
  return (
    <article className="blog-card">

      <div className="blog-card-image">

        <img
          src={post.image}
          alt={post.title}
        />

        <span className="card-category">
          {post.category}
        </span>

      </div>


      <div className="blog-card-content">

        <div className="blog-card-meta">

          <span>
            ◷ {post.readTime} دقائق للقراءة
          </span>

          <span>•</span>

          <span>
            {post.date}
          </span>

        </div>


        <h3>
          {post.title}
        </h3>


        <p>
          {post.excerpt}
        </p>


        <div className="blog-card-bottom">

          <div className="author">

            <div className="author-avatar">
              {post.author.name.charAt(0)}
            </div>

            <div>
              <strong>
                {post.author.name}
              </strong>

              <small>
                مصور فوتوغرافي
              </small>
            </div>

          </div>


          <Link
            to={`/blog/${post.id}`}
            className="read-more"
          >
            <span>←</span>
          </Link>

        </div>

      </div>

    </article>
  );
}

export default BlogCard;