import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditCategory = () => {
    const navigate = useNavigate()
    const [btnLoading, setBtnLoading] = useState(false);
    const { _id } = useParams()
    const [data, setData] = useState({
        categoryName: "",
        categoryImage: ""
    })

    const getApiData = async () => {
        try {
            const res = await axios.get("https://api.cl.assortsmachinetools.com/api/category/" + _id)
            if (res.status === 200) {
                setData(res.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getApiData()
    }, [_id])


    const getInputData = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    const getFileData = (e) => {
        const { name, files } = e.target
        setData({ ...data, [name]: files[0] })
    }

    const formdata = new FormData()
    formdata.append("categoryName", data.categoryName)
    formdata.append("categoryImage", data.categoryImage)

    const postData = async (e) => {
        e.preventDefault()
        setBtnLoading(true)
        try {
            const res = await axios.put("https://api.cl.assortsmachinetools.com/api/category/" + _id, formdata)
            if (res.status === 200) {
                setBtnLoading(false)
                navigate("/all-category")
            }
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
                    <h4>Edit Category</h4>
                </div>
                <div className="links">
                    <Link to="/all-category" className="add-new">Back <i className="fa-regular fa-circle-left"></i></Link>
                </div>
            </div>

            <div className="d-form">
                <form className="row g-3" onSubmit={postData}>
                    <div className="col-md-6">
                        <label htmlFor="categoryName" className="form-label">Category Name</label>
                        <input type="text" name='categoryName' className="form-control" id="categoryName" value={data.categoryName} onChange={getInputData} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="categoryImage" className="form-label">Category Image</label>
                        <input type="file" name='categoryImage' className="form-control" id="categoryImage" onChange={getFileData} />
                    </div>
                    <div className="col-12 text-center">
                        {/* <button type="submit" className="">Update Category</button> */}
                        <button type="submit" className={`${btnLoading ? 'not-allowed' : 'allowed'}`} >{btnLoading ? "Please Wait.." : "Update Category"} </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default EditCategory;
