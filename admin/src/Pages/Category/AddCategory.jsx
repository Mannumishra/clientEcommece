import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCategory = () => {
    const navigate = useNavigate()
    const [isLoading, setIsloding] = useState(false)
    const [data, setData] = useState({
        categoryName: "",
        categoryImage: ""
    })
    const getInputdata = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }
    const getfiledata = (e) => {
        const { name, files } = e.target
        setData({ ...data, [name]: files[0] })
    }

    const formData = new FormData()
    formData.append("categoryName", data.categoryName)
    formData.append("categoryImage", data.categoryImage)

    const postData = async (e) => {
        e.preventDefault()
        setIsloding(true)
        try {
            const res = await axios.post("https://hapsserver.onrender.com/api/category", formData)
            console.log(res)
            if (res.status === 200) {
                toast.success("New Category Addedd Successfully")
                setIsloding(false)
                navigate("/all-category")
            }
        } catch (error) {
            setIsloding(false)
            console.log("my error" ,error)
            toast.error(error.response.data.mess)
        }
    }
    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>Add Category</h4>
                </div>
                <div className="links">
                    <Link to="/all-category" className="add-new">Back <i className="fa-regular fa-circle-left"></i></Link>
                </div>
            </div>

            <div className="d-form">
                <form className="row g-3" onSubmit={postData}>
                    <div className="col-md-6">
                        <label htmlFor="categoryName" className="form-label">Category Name<sup className='text-danger'>*</sup></label>
                        <input type="text" name='categoryName' className="form-control" id="categoryName" onChange={getInputdata} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="categoryImage" className="form-label">Category Image<sup className='text-danger'>*</sup></label>
                        <input type="file" name='categoryImage' className="form-control" id="categoryImage" onChange={getfiledata} />
                    </div>
                    {/* <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="categoryActive" id="categoryActive" />
                            <label className="form-check-label" htmlFor="categoryActive">
                                Active in Homepage
                            </label>
                        </div>
                    </div> */}
                    <div className="col-12 text-center">
                        <button type="submit" disabled={isLoading} className={`${isLoading ? 'not-allowed' : 'allowed'}`}>{isLoading ? "Please Wait..." : "Add Category"}</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default AddCategory;
