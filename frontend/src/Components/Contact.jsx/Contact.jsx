import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Contact = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const getInputData = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const postData = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("https://hapsserver.onrender.com/api/contact", data);
            console.log(res);
            if (res.status === 200) {
                toast.success(res.data.message);
                setData({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: ""
                });
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    return (
        <>
            {/* <!-- Hero Start --> */}
            <div className="container-fluid bg-primary hero-header mb-5">
                <div className="container text-center">
                    <h1 className="display-4 text-white mb-3 animated slideInDown">Contact</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center mb-0 animated slideInDown">
                            <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">Contact</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* <!-- Hero End --> */}

            {/* <!-- Contact Info Start --> */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                            <div className="contact-info-item position-relative bg-primary text-center p-3">
                                <div className="border py-5 px-3">
                                    <i className="fa fa-map-marker-alt fa-3x text-dark mb-4"></i>
                                    <h5 className="text-white">Office Address</h5>
                                    <h5 className="fw-light text-white">123 Street, New York, USA</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                            <div className="contact-info-item position-relative bg-primary text-center p-3">
                                <div className="border py-5 px-3">
                                    <i className="fa fa-phone-alt fa-3x text-dark mb-4"></i>
                                    <h5 className="text-white">Call Us</h5>
                                    <h5 className="fw-light text-white">+012 345 67890</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                            <div className="contact-info-item position-relative bg-primary text-center p-3">
                                <div className="border py-5 px-3">
                                    <i className="fa fa-envelope fa-3x text-dark mb-4"></i>
                                    <h5 className="text-white">Mail Us</h5>
                                    <h5 className="fw-light text-white">info@example.com</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Contact Info End --> */}

            {/* <!-- Contact Start --> */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                        <h1 className="text-primary mb-5"><span className="fw-light text-dark">If You Have Any Query,</span> Please Contact Us</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-7 wow fadeIn" data-wow-delay="0.1s">
                            <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                            <div className="wow fadeIn" data-wow-delay="0.3s">
                                <form onSubmit={postData}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="name" name='name' placeholder="Your Name" value={data.name} onChange={getInputData} />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control" id="email" name='email' placeholder="Your Email" value={data.email} onChange={getInputData} />
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-floating">
                                                <input type="number" className="form-control" id="phone" name='phone' placeholder="Your Number" value={data.phone} onChange={getInputData} />
                                                <label htmlFor="phone">Phone Number</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="subject" name='subject' placeholder="Subject" value={data.subject} onChange={getInputData} />
                                                <label htmlFor="subject">Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control" name='message' placeholder="Leave a message here" id="message" style={{ height: "150px" }} value={data.message} onChange={getInputData}></textarea>
                                                <label htmlFor="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-5 wow fadeIn" data-wow-delay="0.5s">
                            <iframe className="w-100 h-100"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                                frameBorder="0" style={{ minHeight: "300px", border: 0 }} allowFullScreen="" aria-hidden="false"
                                tabIndex="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Contact End --> */}

            {/* <!-- Newsletter Start --> */}
            <div className="container-fluid newsletter bg-primary py-5 my-5">
                <div className="container py-5">
                    <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                        <h1 className="text-white mb-3"><span className="fw-light text-dark">Let's Subscribe</span> The Newsletter</h1>
                        <p className="text-white mb-4">Subscribe now to get 30% discount on any of our products</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-7 wow fadeIn" data-wow-delay="0.5s">
                            <div className="position-relative w-100 mt-3 mb-2">
                                <input className="form-control w-100 py-4 ps-4 pe-5" type="text" placeholder="Enter Your Email"
                                    style={{ height: "48px" }} />
                                <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i
                                    className="fa fa-paper-plane text-white fs-4"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Newsletter End --> */}
        </>
    );
};

export default Contact;
