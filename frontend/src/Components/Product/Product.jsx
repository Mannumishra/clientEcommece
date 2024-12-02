import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Product = () => {
    const location = window.location.pathname
    const [product, setProduct] = useState([])
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(10000)
    const [category, setCategory] = useState('')
    const [categories, setCategories] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    const getProductdata = async () => {
        try {
            const res = await axios.get("https://hapsserver.onrender.com/api/product")
            console.log(res)
            setProduct(res.data.data)
            setFilteredProducts(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    const getcategorydata = async () => {
        try {
            const res = await axios.get("https://hapsserver.onrender.com/api/category")
            setCategories(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProductdata()
        getcategorydata()
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])

    useEffect(() => {
        filterProducts()
    }, [minPrice, maxPrice, category])

    const filterProducts = () => {
        let filtered = product.filter(item => {
            let productPrice = item.productSize[0].finalPrice
            let matchesCategory = category ? item.categoryName === category : true
            return productPrice >= minPrice && productPrice <= maxPrice && matchesCategory
        })
        setFilteredProducts(filtered)
    }

    return (
        <>
            {/* <!-- Hero Start --> */}
            {
                location === '/product' ? <div className="container-fluid bg-primary hero-header mb-5">
                    <div className="container text-center">
                        <h1 className="display-4 text-white mb-3 animated slideInDown">Products</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center mb-0 animated slideInDown">
                                <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                                <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                                <li className="breadcrumb-item text-white active" aria-current="page">Products</li>
                            </ol>
                        </nav>
                    </div>
                </div> : null
            }
            {/* <!-- Hero End --> */}


            {/* <!-- Product Start --> */}
            {
                location === '/product' ?
                    <div className="container-fluid py-5">
                        <div className="container">
                            <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                                <h1 className="text-primary mb-3"><span className="fw-light text-dark">Our Natural</span> Hair Products</h1>
                                <p className="mb-5">Our natural hair products nourish and strengthen your hair, using organic ingredients for healthier, shinier, and more vibrant locks.</p>
                            </div>
                            <div className="row g-4">
                                <div className="col-md-3">
                                    <div className="filter-section">
                                        <div className="mb-1">
                                            <label htmlFor="category" className="form-label">Category</label>
                                            <select className="form-control" id="category" value={category} onChange={e => setCategory(e.target.value)}>
                                                <option value="">All</option>
                                                {
                                                    categories.map((item, index) =>
                                                        <option key={index} value={item.categoryName}>{item.categoryName}</option>
                                                    )
                                                }
                                            </select>
                                        </div>
                                        <div className="mb-1">
                                            <label htmlFor="minPrice" className="form-label">Min Price</label>
                                            <input type="number" className="form-control" id="minPrice" value={minPrice} onChange={e => setMinPrice(Number(e.target.value))} />
                                        </div>
                                        <div className="mb-1">
                                            <label htmlFor="maxPrice" className="form-label">Max Price</label>
                                            <input type="number" className="form-control" id="maxPrice" value={maxPrice} onChange={e => setMaxPrice(Number(e.target.value))} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="row g-4">
                                        {filteredProducts.map((item, index) => (
                                            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s" key={index}>
                                                <div className="product-item text-center border h-100 p-4">
                                                    <img className="img-fluid mb-4" src={item.productImage3} alt="" />
                                                    <h2 className="h6 d-inline-block mb-2">{item.productName}</h2>
                                                    <div className="mb-2">
                                                        <small className="fa fa-star text-warning"></small>
                                                        <small className="fa fa-star text-warning"></small>
                                                        <small className="fa fa-star text-warning"></small>
                                                        <small className="fa fa-star text-warning"></small>
                                                        <small className="fa fa-star text-warning"></small>
                                                        <small>(99)</small>
                                                    </div>
                                                    <h5 className="text-primary mb-3"><span>{item.productSize[0].discountPrice}% OFF</span></h5>
                                                    <h5 className="text-primary mb-3">&#8377; {item.productSize[0].finalPrice} &nbsp; <span><del className='text-danger'>&#8377; {item.productSize[0].price}</del></span></h5>
                                                    <Link to={`/details/${item._id}`} className="btn btn-outline-primary px-3">See Details</Link>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="col-12 text-center mt-4">
                                        <a className="btn btn-primary py-2 px-4" href="">Load More Products</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="container-fluid py-5">
                        <div className="container">
                            <div className="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                                <h1 className="text-primary mb-3"><span className="fw-light text-dark">Our Natural</span> Hair Products</h1>
                                <p className="mb-5">Our natural hair products nourish and strengthen your hair, using organic ingredients for healthier, shinier, and more vibrant locks.</p>
                            </div>
                            <div className="row g-4">
                                {
                                    product.map((item, index) =>
                                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s" key={index}>
                                            <div className="product-item text-center border h-100 p-4">
                                                <img className="img-fluid mb-4" src={item.productImage3} alt="" />
                                                <h2 className="h6 d-inline-block mb-2">{item.productName}</h2>
                                                <div className="mb-2">
                                                    <small className="fa fa-star text-warning"></small>
                                                    <small className="fa fa-star text-warning"></small>
                                                    <small className="fa fa-star text-warning"></small>
                                                    <small className="fa fa-star text-warning"></small>
                                                    <small className="fa fa-star text-warning"></small>
                                                    <small>(99)</small>
                                                </div>
                                                <h5 className="text-primary mb-3"><span>{item.productSize[0].discountPrice}% OFF</span></h5>
                                                <h5 className="text-primary mb-3">&#8377; {item.productSize[0].finalPrice} &nbsp; <span><del className='text-danger'>&#8377; {item.productSize[0].price}</del></span></h5>
                                                <Link to={`/details/${item._id}`} className="btn btn-outline-primary px-3">See Details</Link>
                                            </div>
                                        </div>
                                    )}
                                <div className="col-12 text-center">
                                    <a className="btn btn-primary py-2 px-4" href="">Load More Products</a>
                                </div>
                            </div>
                        </div>
                    </div>
            }
            {/* <!-- Product End --> */}
        </>
    )
}

export default Product
