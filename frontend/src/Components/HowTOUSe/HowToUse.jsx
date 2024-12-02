import React, { useEffect } from 'react';
import image from '../../Images/howtouse.avif';
import image1 from '../../Images/howtouse2.avif';
import image2 from '../../Images/howtouse3.avif';

const HowToUse = () => {
    const location = window.location.pathname;
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    return (
        <>
            {/* Hero Section */}
            {
                location === '/how_to_use' ? 
                <div className="container-fluid bg-primary hero-header mb-5">
                    <div className="container text-center">
                        <h1 className="display-4 text-white mb-3 animated slideInDown">How To Use</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center mb-0 animated slideInDown">
                                <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                                <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                                <li className="breadcrumb-item text-white active" aria-current="page">How To Use</li>
                            </ol>
                        </nav>
                    </div>
                </div> 
                : null
            }

            {/* Features Section */}
            {
                location === '/how_to_use' ? 
                <div className="container-fluid py-5">
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                                <div className="feature-item position-relative bg-primary text-center p-3">
                                    <div className="border py-5 px-3">
                                        <i className="fa fa-tshirt fa-3x text-dark mb-4"></i>
                                        <h5 className="text-white mb-0">Soft on Fabrics</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                                <div className="feature-item position-relative bg-primary text-center p-3">
                                    <div className="border py-5 px-3">
                                        <i className="fa fa-water fa-3x text-dark mb-4"></i>
                                        <h5 className="text-white mb-0">Gentle Washing</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                                <div className="feature-item position-relative bg-primary text-center p-3">
                                    <div className="border py-5 px-3">
                                        <i className="fa fa-sun fa-3x text-dark mb-4"></i>
                                        <h5 className="text-white mb-0">Quick Dry</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                : null
            }

            {/* How To Use Section */}
            <div className="container-fluid how-to-use bg-primary my-5 py-5">
                <div className="container text-white py-5">
                    <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                        <h1 className="text-white mb-3"><span className="fw-light text-dark">How To Use Our</span> Bra, Panty & Clothes Care Tips</h1>
                        <p className="mb-5">Follow these simple steps to ensure your delicate garments are washed and cared for properly to maintain their longevity and comfort.</p>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-4 text-center wow fadeIn" data-wow-delay="0.3s">
                            <div className="btn-square rounded-circle border mx-auto mb-4" style={{ width: "210px", height: "210px" }}>
                                <img src={image1} alt="" style={{ height: 200, width: 200, borderRadius: "50%" }} />
                            </div>
                            <h5 className="text-white">Sort Garments</h5>
                            <hr className="w-25 bg-light my-2 mx-auto" />
                            <span>Separate bras, panties, and delicate clothing from heavier items. Use a mesh laundry bag for added protection during washing.</span>
                        </div>
                        <div className="col-lg-4 text-center wow fadeIn" data-wow-delay="0.5s">
                            <div className="btn-square rounded-circle border mx-auto mb-4" style={{ width: "210px", height: "210px" }}>
                                <img src={image2} alt="" style={{ height: 200, width: 200, borderRadius: "50%" }} />
                            </div>
                            <h5 className="text-white">Wash Gently</h5>
                            <hr className="w-25 bg-light my-2 mx-auto" />
                            <span>Use a mild detergent and select the delicate wash cycle or hand wash. Avoid twisting or wringing the fabric to maintain elasticity.</span>
                        </div>
                        <div className="col-lg-4 text-center wow fadeIn" data-wow-delay="0.1s">
                            <div className="btn-square rounded-circle border mx-auto mb-4" style={{ width: "210px", height: "210px" }}>
                                <img src={image} alt="" style={{ height: 200, width: 200, borderRadius: "50%" }} />
                            </div>
                            <h5 className="text-white">Dry Carefully</h5>
                            <hr className="w-25 bg-light my-2 mx-auto" />
                            <span>Air dry bras and panties on a flat surface or a drying rack. Avoid direct sunlight or tumble drying to prevent damage.</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HowToUse;
