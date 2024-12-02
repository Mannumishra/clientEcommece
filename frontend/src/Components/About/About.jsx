import React, { useEffect } from 'react';
import Newsletter from '../Newsletter/Newsletter';
import { Link } from 'react-router-dom';
import image from '../../Images/feacture.avif';

const About = () => {
    const location = window.location.pathname;
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);
    return (
        <>
            {/* Hero Start */}
            {
                location === '/about' ? (
                    <div class="container-fluid bg-primary hero-header mb-5">
                        <div class="container text-center">
                            <h1 class="display-4 text-white mb-3 animated slideInDown">About Us</h1>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb justify-content-center mb-0 animated slideInDown">
                                    <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                                    <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                                    <li class="breadcrumb-item text-white active" aria-current="page">About</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                ) : null
            }
            {/* Hero End */}

            {/* Feature Start */}
            <div class="container-fluid py-5">
                <div class="container">
                    <div class="row g-4">
                        <div class="col-md-3 py-5 px-3" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <i class="fa fa-female fa-3x text-dark mb-4"></i>
                            <h5 class="text-dark mb-0">Comfortable Fit</h5>
                        </div>
                        <div className="col-md-3 py-5 px-3" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <i class="fa fa-heart fa-3x text-dark mb-4"></i>
                            <h5 class="text-dark mb-0">Skin-Friendly</h5>
                        </div>
                        <div className="col-md-3 py-5 px-3" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <i class="fa fa-tags fa-3x text-dark mb-4"></i>
                            <h5 class="text-dark mb-0">Affordable Styles</h5>
                        </div>
                        <div class="col-md-3 py-5 px-3" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <i class="fa fa-check fa-3x text-dark mb-4"></i>
                            <h5 class="text-dark mb-0">Quality Assured</h5>
                        </div>
                    </div>
                </div>
            </div>
            {/* Feature End */}

            {/* About Start */}
            <div class="container-fluid">
                <div class="container">
                    <div class="row g-5 align-items-center">
                        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <img class="img-fluid animated pulse infinite" src={image} alt="Comfort and Style" />
                        </div>
                        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <h1 class="text-primary mb-4">Your Comfort <span class="fw-light text-dark">Is Our Priority</span></h1>
                            <p class="mb-4">We understand that the right fit can make all the difference. Our range of bras, panties, and clothing is designed to provide unmatched comfort while keeping you stylish.</p>
                            <p class="mb-4">From premium fabrics to designs that cater to every body type, we focus on delivering products that celebrate your uniqueness and ensure you feel confident every day.</p>
                            <p className="mb-4">Our collections are crafted with care to suit your active lifestyle while maintaining elegance and quality. Because you deserve the best, inside and out.</p>
                            <Link class="btn btn-primary py-2 px-4" to="/product">Shop Now</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}

            {location === '/about' ? <Newsletter /> : null}
        </>
    );
};

export default About;
