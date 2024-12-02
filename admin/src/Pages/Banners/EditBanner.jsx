import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditBanner = () => {
    const [btnLoading, setBtnLoading] = useState(false)
    const { _id } = useParams()
    const navigate= useNavigate()
    const [data, setData] = useState({
        bannerImage: ""
    })

    const getApiData = async () => {
        try {
            const res = await axios.get("https://api.cl.assortsmachinetools.com/api/banner/" + _id)
            setData(res.data.data)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getApiData()
    }, [_id])

    const getfileData = (e) => {
        const { name, files } = e.target
        setData({ ...data, [name]: files[0] })
    }

    const formData = new FormData()
    formData.append("bannerImage", data.bannerImage)


    const postData = async (e) => {
        e.preventDefault()
        setBtnLoading(true)
        try {
            const res = await axios.put("https://api.cl.assortsmachinetools.com/api/banner/" + _id, formData)
            if(res.status===200){
                toast.success("Banner Updated Successfully")
                navigate("/all-banners")
                setBtnLoading(false)
            }
            console.log(res)
        } catch (error) {
            console.log(error)
            setBtnLoading(false)
        }
    }
    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>Edit Banner</h4>
                </div>
                <div className="links">
                    <Link to="/all-banners" className="add-new">Back <i className="fa-regular fa-circle-left"></i></Link>
                </div>
            </div>

            <div className="d-form">
                <form className="row g-3" onSubmit={postData}>
                    <div className="col-md-6">
                        <label htmlFor="bannerImage" className="form-label">Banner Image<sup className='text-danger'>*</sup></label>
                        <input type="file" name='bannerImage' className="form-control" id="bannerImage" onChange={getfileData} />
                    </div>
                    <div className="col-md-6">
                        <img src={data.bannerImage} alt="Category Preview" style={{ width: '100%', height: 'auto' }} />
                    </div>
                    <div className="col-12 text-center">
                        <button type="submit" className={`${btnLoading ? 'not-allowed' : 'allowed'}`} >{btnLoading ? "Please Wait.." : "Update Banner"} </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default EditBanner;
