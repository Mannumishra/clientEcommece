import React, { useEffect, useState } from 'react';
import './Singlepage.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import Product from '../Product/Product';

const SinglePage = () => {
  const navigate = useNavigate()
  const [singleData, setSingleData] = useState({})
  const [backendImages, setBackendImages] = useState([])
  const { _id } = useParams()
  const [qty, setQty] = useState(1);
  const [activeSize, setActiveSize] = useState(null);
  const [activeSizePrice, setActiveSizePrice] = useState(null);
  const [activeSizeDiscount, setActiveSizeDiscount] = useState(null);
  const [activeSizeFinalPrice, setActiveSizeFinalPrice] = useState(null);
  const [activeSizeStock, setActiveSizeStock] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const loginvalue = sessionStorage.getItem("login");

  const handleSize = (productSize) => {
    setActiveSize(productSize.sizeML);
    setActiveSizePrice(productSize.price);
    setActiveSizeDiscount(productSize.discountPrice);
    setActiveSizeFinalPrice(productSize.finalPrice);
  };

   const getsingleProductData = async () => {
    try {
        let res = await axios.get("https://hapsserver.onrender.com/api/product/" + _id);
        console.log(res);
        setSingleData(res.data.data);
        const imageKeys = Object.keys(res.data.data).filter(key => key.startsWith('productImage'));
        const images = imageKeys.map(key => res.data.data[key]);
        setBackendImages(images);
        if (res.data.data.productSize && res.data.data.productSize.length > 0) {
            handleSize(res.data.data.productSize[0]);
        }
    } catch (error) {
        console.log(error);
    }
}
  const localImages = [];
  const images = backendImages.length > 0 ? backendImages : localImages;

  useEffect(() => {
    getsingleProductData()
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const addToCart = async () => {
    try {
      if (activeSize && activeSizePrice) {
        const newItem = {
          userid: sessionStorage.getItem("userid"),
          productid: singleData._id,
          productname: singleData.productName,
          quantity: qty,
          sizeML: activeSize,
          price: activeSizeFinalPrice,
          image: singleData.productImage1
        };
        if (newItem.quantity > 0 && loginvalue === "true") {
          let res = await axios.post('https://hapsserver.onrender.com/api/cart', newItem);
          if (res.status === 200) {
            toast.success("Product Added to cart");
            navigate("/cart");
          }
        } else {
          toast.error("Please login then you can add the product to the cart");
          setTimeout(() => {
            navigate("/login");
          }, 1000);
        }
      } else {
        console.error('Please select a size.');
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  return (
    <>
      <div className="product-details-container">
        <div className="product-details-inner">
          <div className="product-image-column">
            <div className="image-carousel">
              <div className="carousel-slides">
                {images.map((image, index) => (
                  <div
                    className={`carousel-slide ${index === currentImageIndex ? 'active' : ''}`}
                    key={index}
                  >
                    <img src={image} className="carousel-image" alt={`Slide ${index}`} />
                  </div>
                ))}
              </div>
              <button className="carousel-prev" onClick={handlePrevClick}>
                <span className="carousel-prev-icon">&#9664;</span>
              </button>
              <button className="carousel-next" onClick={handleNextClick}>
                <span className="carousel-next-icon">&#9654;</span>
              </button>
            </div>
            <div className="thumbnail-gallery">
              {images.map((image, index) => (
                <img
                  src={image}
                  className={`thumbnail-image ${index === currentImageIndex ? 'active' : ''}`}
                  alt={`Thumbnail ${index}`}
                  onClick={() => handleThumbnailClick(index)}
                  key={index}
                />
              ))}
            </div>
          </div>
          <div className="product-info-column">
            <p className="product-title">{singleData.categoryName}</p>
            <p className="product-description">{singleData.productName}
            <p className="product-description">{singleData.productSubDescription}</p>
            </p>
            <div className="rating">
              <i className="fa fa-star rating-icon"></i>
              <i className="fa fa-star rating-icon"></i>
              <i className="fa fa-star rating-icon"></i>
              <i className="fa fa-star rating-icon"></i>
              <i className="fa fa-star rating-icon-empty"></i>
              <p className="rating-count">(1210)</p>
            </div>
            <div className="size-options">
              {singleData.productSize ? (
                singleData.productSize.map((item, index) => (
                  <button
                    className={`size-button ${activeSize === item.sizeML ? 'active' : ''}`}
                    key={index}
                    onClick={() => handleSize(item)}
                  >
                    Size: {item.sizeML} ML
                  </button>
                ))
              ) : null}
            </div>
            <div className="price-info">
              <div>
                <del className='original-price'>Rs.{activeSizePrice}</del>
              </div>
              <div className='current-price'>
                Rs.{activeSizeFinalPrice}
              </div>
              <div>
                | Save {activeSizeDiscount} %
              </div>
            </div>
            <p className="product-description">{singleData.productDescription}</p>
            <p>{singleData.productDetails}</p>
            <div className="quantity-control">
              <button className="quantity-button" onClick={() => qty > 1 ? setQty(qty - 1) : ""}>-</button>
              <p className="quantity-display">{qty}</p>
              <button className="quantity-button" onClick={() => setQty(qty + 1)}>+</button>
            </div>
            <div className='action-buttons'>
              <button className="cart-button" onClick={addToCart}>
                <i className="fa fa-shopping-bag"></i> Add to cart
              </button>
              <button className="buy-now-button">
                <i className="fa fa-shopping-bag"></i> Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div>
        <Product />
      </div>
    </>
  );
};

export default SinglePage;
