import React, { useEffect } from 'react';
import Newsletter from '../Newsletter/Newsletter';
import image from '../../Images/feacture.avif';

const Feature = () => {
    const location = window.location.pathname;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <>
            {/* Hero Section */}
            {location === '/feature' ? (
                <div className="container-fluid bg-primary hero-header mb-5">
                    <div className="container text-center">
                        <h1 className="display-4 text-white mb-3 animated slideInDown">Our Features</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center mb-0 animated slideInDown">
                                <li className="breadcrumb-item">
                                    <a className="text-white" href="#">Home</a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a className="text-white" href="#">Pages</a>
                                </li>
                                <li className="breadcrumb-item text-white active" aria-current="page">
                                    Features
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            ) : null}

            {/* Features */}
            {location === '/feature' ? (
                <div className="container-fluid py-5">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                                <div className="feature-item position-relative bg-primary text-center p-3">
                                    <div className="border py-5 px-3">
                                        <i className="fa fa-tshirt fa-3x text-dark mb-4"></i>
                                        <h5 className="text-white mb-0">Comfortable Fabrics</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                                <div className="feature-item position-relative bg-primary text-center p-3">
                                    <div className="border py-5 px-3">
                                        <i className="fa fa-user-shield fa-3x text-dark mb-4"></i>
                                        <h5 className="text-white mb-0">Skin Friendly</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                                <div className="feature-item position-relative bg-primary text-center p-3">
                                    <div className="border py-5 px-3">
                                        <i className="fa fa-leaf fa-3x text-dark mb-4"></i>
                                        <h5 className="text-white mb-0">Eco-Friendly Materials</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}

            {/* Benefits Section */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                        <h1 className="text-primary mb-3">
                            <span className="fw-light text-dark">Top Benefits of Our</span> Clothing Line
                        </h1>
                        <p className="mb-5">
                            Discover the unmatched comfort, quality, and style of our clothing collection, crafted for all-day wear and elegance.
                        </p>
                    </div>
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                            <div className="row g-5">
                                <div className="col-12 d-flex">
                                    <div className="btn-square rounded-circle border flex-shrink-0" style={{ width: "80px", height: "80px" }}>
                                        <i className="fa fa-check fa-2x text-primary"></i>
                                    </div>
                                    <div className="ps-3">
                                        <h5>Breathable Fabrics</h5>
                                        <hr className="w-25 bg-primary my-2" />
                                        <span>Lightweight and airy materials for maximum comfort.</span>
                                    </div>
                                </div>
                                <div className="col-12 d-flex">
                                    <div className="btn-square rounded-circle border flex-shrink-0" style={{ width: "80px", height: "80px" }}>
                                        <i className="fa fa-check fa-2x text-primary"></i>
                                    </div>
                                    <div className="ps-3">
                                        <h5>Perfect Fit</h5>
                                        <hr className="w-25 bg-primary my-2" />
                                        <span>Designed to flatter every body type with precision.</span>
                                    </div>
                                </div>
                                <div className="col-12 d-flex">
                                    <div className="btn-square rounded-circle border flex-shrink-0" style={{ width: "80px", height: "80px" }}>
                                        <i className="fa fa-check fa-2x text-primary"></i>
                                    </div>
                                    <div className="ps-3">
                                        <h5>Wide Variety</h5>
                                        <hr className="w-25 bg-primary my-2" />
                                        <span>Extensive range of designs, colors, and styles to choose from.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                            <img className="img-fluid animated pulse infinite" src={image} alt="Clothing Collection" />
                        </div>
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                            <div className="row g-5">
                                <div className="col-12 d-flex">
                                    <div className="btn-square rounded-circle border flex-shrink-0" style={{ width: "80px", height: "80px" }}>
                                        <i className="fa fa-check fa-2x text-primary"></i>
                                    </div>
                                    <div className="ps-3">
                                        <h5>Durability</h5>
                                        <hr className="w-25 bg-primary my-2" />
                                        <span>Long-lasting materials that stand up to daily wear.</span>
                                    </div>
                                </div>
                                <div className="col-12 d-flex">
                                    <div className="btn-square rounded-circle border flex-shrink-0" style={{ width: "80px", height: "80px" }}>
                                        <i className="fa fa-check fa-2x text-primary"></i>
                                    </div>
                                    <div className="ps-3">
                                        <h5>Stylish Designs</h5>
                                        <hr className="w-25 bg-primary my-2" />
                                        <span>Trendy and timeless pieces to elevate your wardrobe.</span>
                                    </div>
                                </div>
                                <div className="col-12 d-flex">
                                    <div className="btn-square rounded-circle border flex-shrink-0" style={{ width: "80px", height: "80px" }}>
                                        <i className="fa fa-check fa-2x text-primary"></i>
                                    </div>
                                    <div className="ps-3">
                                        <h5>Easy Care</h5>
                                        <hr className="w-25 bg-primary my-2" />
                                        <span>Low-maintenance garments for hassle-free cleaning.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {location === '/feature' ? <Newsletter /> : null}
        </>
    );
};

export default Feature;
