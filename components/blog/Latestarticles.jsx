import react from 'react'

function LatestArticles(){
    return(
        <section className="section-blog">
            <div className="padding-global">
            <div className="container-large">
                <div className="padding-section-large">
                <div data-w-id="ac5220f6-007d-69c5-1e1a-12eaf7fed6d6" 
                    style={{WebkitTransform:"translate3d(null, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    mozTransform:"translate3d(null, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTrandform:"translate3d(null, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:"translate3d(null, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",}} className="blog-heading-wrapper">
                    <h2>Latest Articles</h2>
                    <div className="blog-category-list-wrapper w-dyn-list">
                    <div role="list" className="blog-category-list w-dyn-items">
                        <div role="listitem" className="blog-category-item w-dyn-item">
                        <a href="blog.html" aria-current="page" className="button is-secondary is-category w-button w--current">All</a>
                        <a href="#" className="button is-secondary is-category w-button"></a>
                        </div>
                    </div>
                    <div className="w-dyn-empty">
                        <div>No items found.</div>
                    </div>
                    </div>
                </div>
                <div className="blog-list-wrapper w-dyn-list">
                    <div role="list" className="blog-list w-dyn-items">
                    <div role="listitem" className="blog-item w-dyn-item">
                        <a href="#" className="blog-card w-inline-block">
                        <div className="blog-image-wrapper"><img src="" loading="lazy" alt="" className="blog-image"/></div>
                        <div></div>
                        <div className="blog-title-wrapper">
                            <h3 className="heading-style-h4"></h3>
                        </div>
                        <div></div>
                        <div className="blog-author-wrapper">
                            <div className="blog-author-image-wrapper"><img loading="lazy" src="" alt="" className="blog-author-image"/></div>
                            <div className="blog-author-text">
                            <div className="text-size-small text-weight-semibold"></div>
                                <div className="blog-date-wrapper">
                                    <div className="text-size-small"></div>
                                    <div className="blog-text-divider">•</div>
                                    <div className="text-size-small"></div>
                                </div>
                            </div>
                        </div>
                        </a>
                    </div>
                    </div>
                    <div className="blog-empty w-dyn-empty">
                    <div>No items found.</div>
                    </div>
                    <div role="navigation" aria-label="List" className="w-pagination-wrapper button-wrapper-center is-pagination">
                    <a href="#" aria-label="Previous Page" className="w-pagination-previous button is-icon is-blog"><svg className="w-pagination-previous-icon" height="12px" width="12px" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 12 12" transform="translate(0, 1)">
                        <path fill="none" stroke="currentColor" fill-rule="evenodd" d="M8 10L4 6l4-4"></path>
                        </svg>
                        <div className="w-inline-block">Previous</div>
                    </a>
                    <a href="#" aria-label="Next Page" className="w-pagination-next button is-icon is-blog">
                        <div className="w-inline-block">Next</div>
                        <div className="button-icon w-embed"><svg width="100%" viewbox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.16602 7.4388L12.8327 7.4388M12.8327 7.4388L6.99935 13.2721M12.8327 7.4388L6.99935 1.60547" stroke="CurrentColor" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg></div>
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default LatestArticles