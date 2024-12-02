import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllBanner = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const limit = 1;

    const getBanner = async () => {
        try {
            const res = await axios.get("https://hapsserver.onrender.com/api/banner");
            setData(res.data.data);
        } catch (error) {
            toast.error(error.response?.data?.message || 'An error occurred');
        }
    };

    useEffect(() => {
        getBanner();
    }, []);

    const deleteBanner = async (_id) => {
        setLoading(true);
        try {
            const res = await axios.delete("https://hapsserver.onrender.com/api/banner/" + _id);
            if (res.status === 200) {
                toast.success("Banner deleted successfully");
                setData(data.filter(item => item._id !== _id));
                setPage(1);
            }
        } catch (error) {
            toast.error('Failed to delete banner');
        } finally {
            setLoading(false);
        }
    };

    const handlePreviousPage = () => {
        if (page > 1) setPage(page - 1);
    };

    const handleNextPage = () => {
        if (page < data.length / limit) setPage(page + 1);
    };

    const currentData = data.slice((page - 1) * limit, page * limit);

    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>All Banners</h4>
                </div>
                <div className="links">
                    <Link to="/add-banner" className="add-new">Add New <i className="fa-solid fa-plus"></i></Link>
                </div>
            </div>

            <div className="filteration">
                <div className="search">
                    <label htmlFor="search">Search</label> &nbsp;
                    <input type="text" name="search" id="search" />
                </div>
            </div>

            <section className="dis-table">
                <table className="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Sr.No.</th>
                            <th scope="col">Image</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1 + (page - 1) * limit}</th>
                                <td><img src={item.bannerImage} alt="" style={{ height: 200, width: "100%" }} /></td>
                                <td><Link className="bt edit" to={`/edit-banner/${item._id}`}>Edit <i className="fa-solid fa-pen-to-square"></i></Link></td>
                                <td><button className="bt delete" onClick={() => deleteBanner(item._id)}>{loading ? "Wait..." : "Delete"} <i className="fa-solid fa-trash"></i></button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <div className="pagination">
                <button onClick={handlePreviousPage} disabled={page === 1} className='btn btn-primary'>Previous</button>
                <span>&nbsp; Page {page} of {Math.ceil(data.length / limit)} &nbsp;</span>
                <button onClick={handleNextPage} disabled={page >= Math.ceil(data.length / limit)} className='btn btn-primary'>Next</button>
            </div>
        </>
    );
};

export default AllBanner;
