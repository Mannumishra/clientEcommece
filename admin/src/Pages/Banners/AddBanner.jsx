import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddBanner = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState({
        bannerImage: ""
    })
    const navigate = useNavigate()

    const getFileData = (e) => {
        const { name, files } = e.target
        setData({ ...data, [name]: files[0] })
    }

    const formData = new FormData()
    formData.append("bannerImage", data.bannerImage)

    const postData = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            let res = await axios.post("https://api.cl.assortsmachinetools.com/api/banner", formData)
            if (res.status === 200) {
                toast.success("New Banner Added Successfully")
                navigate("/all-banners")
            }
        } catch (error) {
            setIsLoading(false)
            toast.error(error.response.data.mess)
        }
    }
    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>Add Banner</h4>
                </div>
                <div className="links">
                    <Link to="/all-banners" className="add-new">Back <i className="fa-regular fa-circle-left"></i></Link>
                </div>
            </div>

            <div className="d-form">
                <form className="row g-3" onSubmit={postData} >
                    <div className="col-md-6">
                        <label htmlFor="bannerImage" className="form-label">Banner Image<sup className='text-danger'>*</sup></label>
                        <input type="file" className="form-control" id="bannerImage" name='bannerImage' onChange={getFileData} required/>
                    </div>
                    {/* <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input"  type="checkbox" name="active" id="active" />
                            <label className="form-check-label" htmlFor="active">
                                Active 
                            </label>
                        </div>
                    </div> */}
                    <div className="col-md-6 text-center mt-5">
                        <button type="submit" disabled={isLoading} className={`${isLoading ? 'not-allowed' : 'allowed'}`}>{isLoading ? "Please Wait..." : "Add Banner"}</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default AddBanner;
