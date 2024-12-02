import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Pagenotfound = () => {
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    },[])
  return (
    <>
      {/* <!-- Hero Start --> */}
    <div class="container-fluid bg-primary hero-header mb-5">
        <div class="container text-center">
            <h1 class="display-4 text-white mb-3 animated slideInDown">404 Error</h1>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center mb-0 animated slideInDown">
                    <li class="breadcrumb-item"><Link class="text-white" to="/">Home</Link></li>
                    <li class="breadcrumb-item"><Link class="text-white" to="/contact">Contact</Link></li>
                    <li class="breadcrumb-item text-white active" aria-current="page">404 Error</li>
                </ol>
            </nav>
        </div>
    </div>
    {/* <!-- Hero End --> */}


    {/* <!-- 404 Start --> */}
    <div class="container-fluid py-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container text-center">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <i class="bi bi-exclamation-triangle display-1 text-primary"></i>
                    <h1 class="display-1">404</h1>
                    <h1 class="mb-4">Page Not Found</h1>
                    <p class="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                    <Link class="btn btn-primary py-2 px-4" to="/">Go Back To Home</Link>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- 404 End --> */}
        

    {/* <!-- Newsletter Start --> */}
    <div class="container-fluid newsletter bg-primary py-5 my-5">
        <div class="container py-5">
            <div class="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{maxwidth: "600px"}}>
                <h1 class="text-white mb-3"><span class="fw-light text-dark">Let's Subscribe</span> The Newsletter</h1>
                <p class="text-white mb-4">Subscribe now to get 30% discount on any of our products</p>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-7 wow fadeIn" data-wow-delay="0.5s">
                    <div class="position-relative w-100 mt-3 mb-2">
                        <input class="form-control w-100 py-4 ps-4 pe-5" type="text" placeholder="Enter Your Email"
                            style={{height: "48px"}} />
                        <button type="button" class="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i
                                class="fa fa-paper-plane text-white fs-4"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Newsletter End --> */}
    </>
  )
}

export default Pagenotfound