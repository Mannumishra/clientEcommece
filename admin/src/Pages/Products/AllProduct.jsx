import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllProduct = () => {
    const [data, setData] = useState([])

    const getProductData = async () => {
        try {
            const res = await axios.get("https://hapsserver.onrender.com/api/product")
            console.log(res)
            if (res.status === 200) {
                setData(res.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const deleteProduct = async (_id) => {
        try {
            const res = await axios.delete("https://hapsserver.onrender.com/api/product/" + _id)
            toast.success(res.data.message)
            getProductData()
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        }
    }

    useEffect(() => {
        getProductData()
    }, [])
    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>All Product List </h4>
                </div>
                <div className="links">
                    <Link to="/add-product" className="add-new">Add New <i class="fa-solid fa-plus"></i></Link>
                </div>
            </div>

            <div className="filteration">
                <div className="selects">
                    {/* <select>
                        <option>Ascending Order </option>
                        <option>Descending Order </option>
                    </select> */}
                </div>
                <div className="search">
                    <label htmlFor="search">Search </label> &nbsp;
                    <input type="text" name="search" id="search" />
                </div>
            </div>

            <section className="dis-table">
                <table className="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Sr.No.</th>
                            <th scope="col">Category</th>
                            <th scope="col">Product Name</th>
                            {/* <th scope="col">Product Description</th> */}
                            {/* <th scope="col">Product Details</th> */}
                            <th scope="col">Product Image</th>
                            <th scope="col">Product Image</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.categoryName}</td>
                                <td>{item.productName}</td>
                                {/* <td>{item.productDescription}</td> */}
                                {/* <td>{item.productDetails}</td> */}
                                <td><img src={item.productImage1} alt={item.productName} style={{ width: '50px', height: '50px' }} /></td>
                                <td><img src={item.productImage2} alt={item.productName} style={{ width: '50px', height: '50px' }} /></td>
                                <td><Link className="bt edit" to={`/edit-product/${item._id}`}>Edit <i className="fa-solid fa-pen-to-square"></i></Link></td>
                                <td><Link className="bt delete" onClick={() => { deleteProduct(item._id) }}>Delete <i className="fa-solid fa-trash"></i></Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

        </>
    )
}

export default AllProduct