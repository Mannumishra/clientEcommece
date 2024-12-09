import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const AllVoucher = () => {
    const [query, setQuery] = useState([])

    const getQuery = async () => {
        try {
            const res = await axios.get("https://induserver.assortsmachinetools.com/api/contact")
            console.log(res)
            if (res.status === 200) {
                const newData = res.data.data
                setQuery(newData.reverse())
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getQuery()
    }, [])
    return (
        <>
            <div className="bread">
                <div className="head">
                    <h4>All Query </h4>
                </div>
                <div className="links">
                    <Link to="/add-voucher" className="add-new">Add New <i class="fa-solid fa-plus"></i></Link>
                </div>
            </div>
            <section className=" mt-2 dis-table table-responsive">
                <table class="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">S No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Message</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            query.map((item, index) =>
                                <tr key={index}>
                                   <td>{index+1}</td>
                                   <td>{item.name}</td>
                                   <td>{item.email}</td>
                                   <td>{item.phone}</td>
                                   <td>{item.subject}</td>
                                   <td>{item.message}</td>
                                   <td>{new Date(item.updatedAt).toLocaleDateString()}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </section>


        </>

    );
}

export default AllVoucher;
