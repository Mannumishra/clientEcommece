import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Newsletter = () => {
    const [data, setData] = useState({
        email: ""
    });

    const getInputdata = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const postdata = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("https://hapsserver.onrender.com/api/newsletter", data);
            console.log(res);
            if (res.status === 200) {
                toast.success(res.data.message);
                setData({ email: "" })
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    };

    return (
        <>
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
                                <form onSubmit={postdata} style={{ display: "flex" }}>
                                    <input
                                        className="form-control py-4 ps-4"
                                        type="email"
                                        name="email"
                                        placeholder="Enter Your Email"
                                        style={{ height: "48px", flex: "1" }}
                                        onChange={getInputdata}
                                    />
                                    <button type="submit" className="btn shadow-none mt-1 me-2" style={{ height: "50px", width: "50px" }}>
                                        <i className="fa fa-paper-plane text-white fs-4"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* <!-- Newsletter End --> */}
        </>
    );
};

export default Newsletter;
