import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditProduct = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [category, setCategory] = useState([]);
    const [data, setData] = useState({
        categoryName: "",
        productName: "",
        productDescription: "",
        productSubDescription: "",
        productDetails: "",
        productSize: [{ sizeML: "", price: "", discountPrice: "", finalPrice: "", stock: "" }],
        productImage1: "",
        productImage2: "",
        productImage3: "",
        productImage4: "",
        productImage5: "",
        productImage6: "",
        productImage7: "",
        productImage8: ""
    });
    const [imageFields, setImageFields] = useState(["productImage1"]);
    const navigate = useNavigate();
    const { _id } = useParams();

    useEffect(() => {
        const getCategoryData = async () => {
            try {
                const res = await axios.get("https://induserver.assortsmachinetools.com/api/category");
                if (res.status === 200) {
                    setCategory(res.data.data);
                }
            } catch (error) {
                console.log(error);
            }
        };

        const getProductData = async () => {
            try {
                const res = await axios.get(`https://induserver.assortsmachinetools.com/api/product/${_id}`);
                if (res.status === 200) {
                    const product = res.data.data;
                    setData(product);
                    // Set dynamic image fields based on product data
                    const imageFields = Object.keys(product).filter(key => key.startsWith('productImage'));
                    setImageFields(imageFields);
                }
            } catch (error) {
                console.log(error);
            }
        };

        getCategoryData();
        getProductData();
    }, [_id]);

    const getInputData = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const getFileData = (e) => {
        const { name, files } = e.target;
        setData({ ...data, [name]: files[0] });
    };

    const handleSizeChange = (index, e) => {
        const { name, value } = e.target;
        const updatedSizes = [...data.productSize];
        updatedSizes[index][name] = value;

        if (name === "price" || name === "discountPrice") {
            const price = updatedSizes[index].price;
            const discount = updatedSizes[index].discountPrice;
            if (price && discount) {
                updatedSizes[index].finalPrice = calculateFinalPrice(price, discount);
            }
        }

        setData({ ...data, productSize: updatedSizes });
    };

    const calculateFinalPrice = (price, discount) => {
        const discountAmount = (price * discount) / 100;
        return price - discountAmount;
    };

    const addSize = () => {
        setData({
            ...data,
            productSize: [...data.productSize, { sizeML: "", price: "", discountPrice: "", finalPrice: "", stock: "" }]
        });
    };

    const removeSize = (index) => {
        const updatedSizes = data.productSize.filter((_, i) => i !== index);
        setData({ ...data, productSize: updatedSizes });
    };

    const addImageField = () => {
        const newFieldName = `productImage${imageFields.length + 1}`;
        setImageFields([...imageFields, newFieldName]);
        setData({ ...data, [newFieldName]: "" });
    };

    const removeImageField = (index) => {
        const fieldName = imageFields[index];
        const updatedFields = imageFields.filter((_, i) => i !== index);
        const newData = { ...data };
        delete newData[fieldName];
        setImageFields(updatedFields);
        setData(newData);
    };

    const updateData = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData();
        formData.append('categoryName', data.categoryName);
        formData.append('productName', data.productName);
        formData.append('productDescription', data.productDescription);
        formData.append('productSubDescription', data.productSubDescription);
        formData.append('productDetails', data.productDetails);
        data.productSize.forEach((size, index) => {
            formData.append(`productSize[${index}][sizeML]`, size.sizeML);
            formData.append(`productSize[${index}][price]`, size.price);
            formData.append(`productSize[${index}][discountPrice]`, size.discountPrice);
            formData.append(`productSize[${index}][finalPrice]`, size.finalPrice);
            formData.append(`productSize[${index}][stock]`, size.stock);
        });
        imageFields.forEach(field => {
            formData.append(field, data[field]);
        });

        try {
            const res = await axios.put(`https://induserver.assortsmachinetools.com/api/product/${_id}`, formData);
            if (res.status === 200) {
                toast.success("Product updated successfully!");
                navigate("/all-products");
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="bread">
                <div className="head">
                    <h4>Edit Product</h4>
                </div>
                <div className="links">
                    <Link to="/all-products" className="add-new">Back <i className="fa-regular fa-circle-left"></i></Link>
                </div>
            </div>

            <div className="d-form">
                <form className="row g-3" onSubmit={updateData}>
                    <div className="col-md-4">
                        <label htmlFor="categoryName" className="form-label">Category<sup className='text-danger'>*</sup></label>
                        <select name='categoryName' onChange={getInputData} value={data.categoryName} className="form-select" id="categoryName">
                            <option selected disabled>Select Category</option>
                            {category.map((item, index) =>
                                <option key={index} value={item.categoryName}>{item.categoryName}</option>
                            )}
                        </select>
                    </div>

                    <div className="col-md-8">
                        <label htmlFor="productName" className="form-label">Product Name<sup className='text-danger'>*</sup></label>
                        <input type="text" name='productName' onChange={getInputData} value={data.productName} className="form-control" required id="productName" />
                    </div>

                    <div className="col-12">
                        <label htmlFor="productSubDescription" className="form-label">Product Sub Description<sup className='text-danger'>*</sup></label>
                        <textarea name='productSubDescription' onChange={getInputData} value={data.productSubDescription} className="form-control" required id="productSubDescription" />
                    </div>

                    <div className="col-12">
                        <label htmlFor="productDescription" className="form-label">Product Description<sup className='text-danger'>*</sup></label>
                        <textarea name='productDescription' onChange={getInputData} value={data.productDescription} className="form-control" required id="productDescription" />
                    </div>

                    <div className="col-12">
                        <label htmlFor="productDetails" className="form-label">Product Details<sup className='text-danger'>*</sup></label>
                        <textarea name='productDetails' onChange={getInputData} value={data.productDetails} className="form-control" required id="productDetails" />
                    </div>

                    {data.productSize.map((size, index) => (
                        <div key={index} className="row g-3 align-items-end">
                            <div className="col-md-2">
                                <label htmlFor={`sizeML-${index}`} className="form-label">Product Size<sup className='text-danger'>*</sup></label>
                                <input type="number" name='sizeML' onChange={(e) => handleSizeChange(index, e)} value={size.sizeML} className="form-control" required id={`sizeML-${index}`} />
                            </div>
                            <div className="col-md-2">
                                <label htmlFor={`price-${index}`} className="form-label">Price<sup className='text-danger'>*</sup></label>
                                <input type="number" onChange={(e) => handleSizeChange(index, e)} name='price' value={size.price} className="form-control" required id={`price-${index}`} />
                            </div>
                            <div className="col-md-2">
                                <label htmlFor={`discountPrice-${index}`} className="form-label">Discount %<sup className='text-danger'>*</sup></label>
                                <input type="number" onChange={(e) => handleSizeChange(index, e)} name='discountPrice' value={size.discountPrice} className="form-control" required id={`discountPrice-${index}`} />
                            </div>
                            <div className="col-md-2">
                                <label htmlFor={`finalPrice-${index}`} className="form-label">Final Price<sup className='text-danger'>*</sup></label>
                                <input type="number" name='finalPrice' value={size.finalPrice} className="form-control" required id={`finalPrice-${index}`} readOnly />
                            </div>
                            <div className="col-md-2">
                                <label htmlFor={`stock-${index}`} className="form-label">Stock Quantity<sup className='text-danger'>*</sup></label>
                                <input type="number" name='stock' onChange={(e) => handleSizeChange(index, e)} value={size.stock} className="form-control" required id={`stock-${index}`} />
                            </div>
                            <div className="col-md-2">
                                <button type="button" className='btn btn-danger' onClick={() => removeSize(index)}>Remove This</button>
                            </div>
                        </div>
                    ))}

                    <div className="col-12">
                        <button type="button" className='btn btn-success' onClick={addSize}>Add New Size</button>
                    </div>

                    {imageFields.map((field, index) => (
                        <div key={index} className="col-md-3">
                            <label htmlFor={field}>Image<sup className='text-danger'>*</sup></label>
                            <input type="file" name={field} onChange={getFileData} className='form-control' id={field} />
                            {index >= 0 && (
                                <button type="button" className="btn btn-danger mt-2" onClick={() => removeImageField(index)}>Remove</button>
                            )}
                        </div>
                    ))}

                    <div className="col-12">
                        <button type="button" className='btn btn-success' onClick={addImageField}>Add New Image</button>
                    </div>

                    <div className="col-12 text-center">
                        <button type="submit" className={`btn btn-primary ${isLoading ? 'not-allowed' : ''}`} disabled={isLoading}>
                            {isLoading ? "Please Wait..." : "Update Product"}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default EditProduct;
