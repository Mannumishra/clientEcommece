import React, { useEffect, useState } from 'react'
import axios from 'axios'

const HeroSection = () => {
  const [banner ,setBanner] = useState([])

  const getBanner= async()=>{
    try {
      let res = await axios.get("https://hapsserver.onrender.com/api/banner")
      console.log(res)
      setBanner(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getBanner()
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [banner.length])
  return (
    <>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {banner.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {banner.map((item, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img src={item.bannerImage} className="d-block w-100" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
      {/* <div class="container-fluid bg-primary hero-header mb-5">
        <div class="container">
            <div class="row g-5 align-items-center">
                <div class="col-lg-6 text-center text-lg-start">
                    <h3 class="fw-light text-white animated slideInRight">Natural & Organic</h3>
                    <h1 class="display-4 text-white animated slideInRight">Hair <span class="fw-light text-dark">Shampoo</span> For Healthy Hair</h1>
                    <p class="text-white mb-4 animated slideInRight">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Etiam feugiat rutrum lectus, sed auctor ex malesuada id. Orci varius natoque penatibus et
                        magnis dis parturient montes.</p>
                    <Link to="/product" class="btn btn-dark py-2 px-4 me-3 animated slideInRight">Shop Now</Link>
                    <Link to="/contact" class="btn btn-outline-dark py-2 px-4 animated slideInRight">Contact Us</Link>
                </div>
                <div class="col-lg-6">
                    <img class="img-fluid animated pulse infinite" src={image} alt="" />
                </div>
            </div>
        </div>
    </div> */}
    </>
  )
}

export default HeroSection