import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getblogPosts } from '../../redux/slice/blog/blogSlice';

function LatestArticles() {
  const dispatch = useDispatch();
  const { blogs, isLoading, isError, isMessage } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getblogPosts());
  }, [dispatch]);

  // if (isLoading) {
  //   return <div>Loading...</div>; // Display a loading spinner or message while fetching data
  // }

  // if (isError) {
  //   return <div>Error: {isMessage}</div>; // Display an error message if the API request fails
  // }

  // if (!blogs || blogs.length === 0) {
  //   return <div>No articles found.</div>; // Display a message if there are no articles
  // }

  return (
    <section className="section-blog">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="blog-heading-wrapper">
              <h2>Latest Articles</h2>
              {/* Rest of the component code */}
              <div className="blog-list-wrapper">
                {blogs.map((blog) => (
                  <div key={blog.id} className="blog-item">
                    <a href="#" className="blog-card">
                      <div className="blog-image-wrapper">
                        <img
                          src={blog.image}
                          loading="lazy"
                          alt=""
                          className="blog-image"
                        />
                      </div>
                      <div className="blog-title-wrapper">
                        <h3 className="heading-style-h4">{blog.title}</h3>
                      </div>
                      <div className="blog-author-wrapper">
                        <div className="blog-author-image-wrapper">
                          <img
                            src={blog.author?.image}
                            loading="lazy"
                            alt=""
                            className="blog-author-image"
                          />
                        </div>
                        <div className="blog-author-text">
                          <div className="text-size-small text-weight-semibold">
                            {blog.author?.name}
                          </div>
                          <div className="blog-date-wrapper">
                            <div className="text-size-small">{blog.date}</div>
                            <div className="blog-text-divider">•</div>
                            <div className="text-size-small">{blog.category}</div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestArticles;
