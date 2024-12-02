import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllTags = () => {
    const [data, setData] = useState([])

    const getNewsletter = async () => {
        try {
            const res = await axios.get("https://hapsserver.onrender.com/api/newsletter")
            const newData = res.data.data
            setData(newData.reverse())
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getNewsletter()
    }, [])
    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>All Newsletter </h4>
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

            <section className="dis-table ">
                <table class="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Sr.No.</th>
                            <th scope="col">Email</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item,index) =>
                                <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td>{item.email}</td>
                                    <td scope="row">{new Date(item.updatedAt).toLocaleDateString()}</td>
                                </tr>
                            )}
                    </tbody>
                </table>
            </section>
        </>
    )
}

export default AllTags