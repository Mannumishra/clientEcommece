import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <>
    {/* <!-- Footer Start --> */}
    <div className="container-fluid bg-white footer">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                    <a href="index.html" className="d-inline-block mb-3">
                        <h1 className="text-primary">Indu enterprises</h1>
                    </a>
                    <p className="mb-0">Welcome to Indu enterprises! Discover our premium oils, shampoos, and facewash products crafted to enhance your beauty and wellness routine. Quality you can trust, delivered to your door.</p>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                    <h5 className="mb-4">Get In Touch</h5>
                    <p><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                    <p><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                    <p><i className="fa fa-envelope me-3"></i>info@example.com</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-square btn-outline-primary me-1" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-square btn-outline-primary me-1" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square btn-outline-primary me-1" href=""><i className="fab fa-instagram"></i></a>
                        <a className="btn btn-square btn-outline-primary me-1" href=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                {/* <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                    <h5 className="mb-4">Our Products</h5>
                    <a className="btn btn-link" href="">Hair Shining Shampoo</a>
                    <a className="btn btn-link" href="">Anti-dandruff Shampoo</a>
                    <a className="btn btn-link" href="">Anti Hair Fall Shampoo</a>
                    <a className="btn btn-link" href="">Hair Growing Shampoo</a>
                    <a className="btn btn-link" href="">Anti smell Shampoo</a>
                </div> */}
                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.7s">
                    <h5 className="mb-4">Popular Link</h5>
                    <Link className="btn btn-link" to="/about">About Us</Link>
                    <Link className="btn btn-link" to="/contact">Contact Us</Link>
                    <Link className="btn btn-link" to="/privacypolicy">Privacy Policy</Link>
                    <Link className="btn btn-link" to="/term&condition">Terms & Condition</Link>
                    <Link className="btn btn-link" to="/return&refund">Return & Refund Policy</Link>
                    <Link className="btn btn-link" to="/blog">Blog</Link>
                    <Link className="btn btn-link" to="/testimonial">Testimonial</Link>
                </div>
            </div>
        </div>
        <div className="container wow fadeIn" data-wow-delay="0.1s">
            <div className="copyright">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved.
                        Designed By <a className="border-bottom" href="https://digital4now.in/">Digital 4 Now </a> .
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <div className="footer-menu">
                            <Link to="/">Home</Link>
                            <Link to="/cookies">Cookies</Link>
                            <Link to="/help">Help</Link>
                            <Link to="/faq">FAQs</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Footer End --> */}
   </>
  )
}

export default Footer
