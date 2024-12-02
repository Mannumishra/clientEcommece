import React, { useEffect } from 'react'
import Newsletter from '../Newsletter/Newsletter'
import { Link } from 'react-router-dom'
import image from '../../Images/1-removebg-preview.png'

const About = () => {
    const location = window.location.pathname
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    },[])
    return (
        <>
            {/* <!-- Hero Start --> */}
            {
                location === '/about' ? <div class="container-fluid bg-primary hero-header mb-5">
                    <div class="container text-center">
                        <h1 class="display-4 text-white mb-3 animated slideInDown">About Us</h1>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb justify-content-center mb-0 animated slideInDown">
                                <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                                <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                                <li class="breadcrumb-item text-white active" aria-current="page">About</li>
                            </ol>
                        </nav>
                    </div>
                </div> : null
            }
            {/* <!-- Hero End --> */}


            {/* <!-- Feature Start --> */}
            <div class="container-fluid py-5">
                <div class="container">
                    <div class="row g-4" >
                        <div class="col-md-3 py-5 px-3" style={{display:"flex",flexDirection:"column" ,justifyContent:"center" ,alignItems:"center"}}>
                            <i class="fa fa-leaf fa-3x text-dark mb-4"></i>
                            <h5 class="text-dark mb-0">100% Natural</h5>
                        </div>
                        <div className="col-md-3 py-5 px-3" style={{display:"flex",flexDirection:"column" ,justifyContent:"center" ,alignItems:"center"}}>
                            <i class="fa fa-tint-slash fa-3x text-dark mb-4"></i>
                            <h5 class="text-dark mb-0">Anti Hair Fall</h5>
                        </div>
                        <div className="col-md-3 py-5 px-3" style={{display:"flex",flexDirection:"column" ,justifyContent:"center" ,alignItems:"center"}}>
                            <i class="fa fa-times fa-3x text-dark mb-4"></i>
                            <h5 class="text-dark mb-0">Hypoallergenic</h5>
                        </div>
                        <div class="col-md-3 py-5 px-3" style={{display:"flex",flexDirection:"column" ,justifyContent:"center" ,alignItems:"center"}}>
                            <i class="fa fa-leaf fa-3x text-dark mb-4"></i>
                            <h5 class="text-dark mb-0">FAD Approved</h5>
                        </div>
                        {/* <div className="col-md-2 py-5 px-3" style={{display:"flex",flexDirection:"column" ,justifyContent:"center" ,alignItems:"center"}}>
                            <i class="fa fa-tint-slash fa-3x text-dark mb-4"></i>
                            <h5 class="text-dark mb-0">Anti Hair Fall</h5>
                        </div>
                        <div className="col-md-2 py-5 px-3" style={{display:"flex",flexDirection:"column" ,justifyContent:"center" ,alignItems:"center"}}>
                            <i class="fa fa-times fa-3x text-dark mb-4"></i>
                            <h5 class="text-dark mb-0">Hypoallergenic</h5>
                        </div> */}
                        {/* <div class="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                    <div class="feature-item position-relative bg-primary text-center p-3">
                        <div class="border py-5 px-3">
                            <i class="fa fa-leaf fa-3x text-dark mb-4"></i>
                            <h5 class="text-white mb-0">100% Natural</h5>
                        </div>
                    </div>
                </div> */}
                        {/* <div class="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                            <div class="feature-item position-relative bg-primary text-center p-3">
                                <div class="border py-5 px-3">
                                    <i class="fa fa-tint-slash fa-3x text-dark mb-4"></i>
                                    <h5 class="text-white mb-0">Anti Hair Fall</h5>
                                </div>
                            </div>
                        </div> */}
                        {/* <div class="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                            <div class="feature-item position-relative bg-primary text-center p-3">
                                <div class="border py-5 px-3">
                                    <i class="fa fa-times fa-3x text-dark mb-4"></i>
                                    <h5 class="text-white mb-0">Hypoallergenic</h5>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* <!-- Feature End --> */}


            {/* <!-- About Start --> */}
            <div class="container-fluid">
                <div class="container">
                    <div class="row g-5 align-items-center">
                        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <img class="img-fluid animated pulse infinite" src={image} />
                        </div>
                        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <h1 class="text-primary mb-4">Healthy Hair <span class="fw-light text-dark">Is A Symbol Of Our
                                Beauty</span></h1>
                            <p class="mb-4">Healthy hair is a powerful symbol of beauty, reflecting our overall well-being and enhancing our self-confidence. It indicates good health, as nutrient deficiencies and stress often first appear in the condition of our hair.</p>
                            <p class="mb-4"> Culturally, hair represents status and identity, with healthy hair providing a versatile medium for personal expression. </p>
                            <p className="mb-4"> Maintaining healthy hair involves a balanced diet rich in essential vitamins and minerals, proper hair care routines, hydration, stress management, and regular trims. By nurturing our hair, we not only improve our appearance but also promote our overall health and vitality.</p>
                            <Link class="btn btn-primary py-2 px-4" to="/product">Shop Now</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}

            {location === '/about' ? <Newsletter /> : null}


        </>
    )
}

export default About