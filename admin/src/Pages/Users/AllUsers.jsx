import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllUsers = () => {
    const [user, setUser] = useState([])

    const getUserData = async () => {
        try {
            const res = await axios.get("https://induserver.assortsmachinetools.com/api/user")
            console.log(res)
            const newData = res.data.data
            setUser(newData.reverse())
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getUserData()
    },[])
    return (
        <>
            <div className="bread">
                <div className="head">
                    <h4>All Users</h4>
                </div>
                <div className="links">
                    {/* Additional links or actions can be placed here */}
                </div>
            </div>

            <section className="dis-table">
                <div className="table-responsive mt-4">
                    <table className="table table-bordered table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Sr.No.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">Role</th>
                                <th scope="col">Created At</th>
                                {/* Add more columns as needed */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                user.map((item,index) =>
                                    <tr key={index}>
                                        <th scope="row">{index+1}</th>
                                        <td scope="row">{item.name}</td>
                                        <td scope="row">{item.email}</td>
                                        <td scope="row">{item.phone}</td>
                                        <td scope="row">{item.role}</td>
                                        <td scope="row">{new Date(item.updatedAt).toLocaleDateString()}</td>
                                    </tr>
                                )}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
};

export default AllUsers;
