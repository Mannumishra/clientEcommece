import React, { useEffect } from 'react'
import Newsletter from '../Newsletter/Newsletter'

const Blog = () => {
    const location = window.location.pathname;
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    return (
        <>
            {/* <!-- Hero Start --> */}
            {
                location === '/blog' ? 
                <div className="container-fluid bg-primary hero-header mb-5">
                    <div className="container text-center">
                        <h1 className="display-4 text-white mb-3 animated slideInDown">Clothing & Lingerie Articles</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center mb-0 animated slideInDown">
                                <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                                <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                                <li className="breadcrumb-item text-white active" aria-current="page">Blog Articles</li>
                            </ol>
                        </nav>
                    </div>
                </div> : null
            }
            {/* <!-- Hero End --> */}

            {/* <!-- Blog Start --> */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                        <h1 className="text-primary mb-3"><span className="fw-light text-dark">From Our</span> Blog Articles</h1>
                        <p className="mb-5">
                            Dive into the latest fashion tips, trends, and insights for lingerie and nightwear. 
                            Explore expert recommendations to help you choose the best bras, panties, and nightwear 
                            that suit your style and comfort. Stay updated with the finest collections!
                        </p>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                            <div className="blog-item border h-100 p-4">
                                <img className="img-fluid mb-4" src="https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-non-padded-non-wired-full-cup-full-figure-bra-in-royal-blue-cotton-411394.jpg" alt="Choosing the Right Bra Size" />
                                <a href="" className="h5 lh-base d-inline-block">How to Choose the Right Bra Size</a>
                                <div className="d-flex text-black-50 mb-2">
                                    <div className="pe-3">
                                        <small className="fa fa-eye me-1"></small>
                                        <small>9999 Views</small>
                                    </div>
                                    <div className="pe-3">
                                        <small className="fa fa-comments me-1"></small>
                                        <small>9999 Comments</small>
                                    </div>
                                </div>
                                <p className="mb-4">Ensure your comfort with our guide to finding the perfect bra size. Understand cup sizes, band measurements, and how to pick the best style for every occasion.</p>
                                <a href="" className="btn btn-outline-primary px-3">Read More</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                            <div className="blog-item border h-100 p-4">
                                <img className="img-fluid mb-4" src="https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-non-padded-non-wired-full-figure-multiway-bra-in-pink-cotton-rich-419453.jpg" alt="Nightwear Essentials" />
                                <a href="" className="h5 lh-base d-inline-block">Top 5 Nightwear Essentials for Ultimate Comfort</a>
                                <div className="d-flex text-black-50 mb-2">
                                    <div className="pe-3">
                                        <small className="fa fa-eye me-1"></small>
                                        <small>9999 Views</small>
                                    </div>
                                    <div className="pe-3">
                                        <small className="fa fa-comments me-1"></small>
                                        <small>9999 Comments</small>
                                    </div>
                                </div>
                                <p className="mb-4">
                                    Discover the ultimate nightwear essentials for a cozy and stylish night in. 
                                    From breathable fabrics to trendy designs, find your perfect match for bedtime.
                                </p>
                                <a href="" className="btn btn-outline-primary px-3">Read More</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                            <div className="blog-item border h-100 p-4">
                                <img className="img-fluid mb-4" src="https://image.clovia.com/media/clovia-images/images/400x600/clovia-picture-non-padded-non-wired-spacer-cup-full-figure-bra-in-dark-pink-cotton-lace-998523.jpg" alt="Benefits of Cotton Panties" />
                                <a href="" className="h5 lh-base d-inline-block">Why Cotton Panties Are a Must-Have</a>
                                <div className="d-flex text-black-50 mb-2">
                                    <div className="pe-3">
                                        <small className="fa fa-eye me-1"></small>
                                        <small>9999 Views</small>
                                    </div>
                                    <div className="pe-3">
                                        <small className="fa fa-comments me-1"></small>
                                        <small>9999 Comments</small>
                                    </div>
                                </div>
                                <p className="mb-4">
                                    Cotton panties are not just comfortable but also great for skin health. 
                                    Learn why they are a must-have in your wardrobe and the different styles available.
                                </p>
                                <a href="" className="btn btn-outline-primary px-3">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Blog End --> */}
            {
                location === '/blog' ? <Newsletter /> : null
            }
        </>
    );
};

export default Blog;
