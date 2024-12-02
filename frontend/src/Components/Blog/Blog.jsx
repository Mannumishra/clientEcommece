import React, { useEffect } from 'react'
import Newsletter from '../Newsletter/Newsletter'

const Blog = () => {
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
    location==='/blog'? <div class="container-fluid bg-primary hero-header mb-5">
    <div class="container text-center">
        <h1 class="display-4 text-white mb-3 animated slideInDown">Blog Articles</h1>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center mb-0 animated slideInDown">
                <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                <li class="breadcrumb-item text-white active" aria-current="page">Blog Articles</li>
            </ol>
        </nav>
    </div>
</div>:null
   }
    {/* <!-- Hero End --> */}


    {/* <!-- Blog Start --> */}
    <div class="container-fluid py-5">
        <div class="container">
            <div class="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                <h1 class="text-primary mb-3"><span class="fw-light text-dark">From Our</span> Blog Articles</h1>
                <p class="mb-5">Explore insights and tips from our blog articles, featuring expert advice on hair care, beauty routines, and the benefits of using natural and organic products. Stay informed and enhance your hair care regimen with our latest articles.</p>
            </div>
            <div class="row g-4">
                <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                    <div class="blog-item border h-100 p-4">
                        <img class="img-fluid mb-4" src="img/blog-1.jpg" alt=""/>
                        <a href="" class="h5 lh-base d-inline-block">Foods that are good for your hair growing</a>
                        <div class="d-flex text-black-50 mb-2">
                            <div class="pe-3">
                                <small class="fa fa-eye me-1"></small>
                                <small>9999 Views</small>
                            </div>
                            <div class="pe-3">
                                <small class="fa fa-comments me-1"></small>
                                <small>9999 Comments</small>
                            </div>
                        </div>
                        <p class="mb-4">Incorporate nutrient-rich foods for optimal hair growth: salmon for omega-3s and protein, spinach for vitamins and iron, eggs for biotin, nuts for essential fats, sweet potatoes for beta-carotene, avocado for healthy fats, berries for antioxidants, beans for protein, Greek yogurt for vitamin B5, and carrots for vitamin A.</p>
                        <a href="" class="btn btn-outline-primary px-3">Read More</a>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                    <div class="blog-item border h-100 p-4">
                        <img class="img-fluid mb-4" src="img/blog-2.jpg" alt=""/>
                        <a href="" class="h5 lh-base d-inline-block">How to take care of hair naturally</a>
                        <div class="d-flex text-black-50 mb-2">
                            <div class="pe-3">
                                <small class="fa fa-eye me-1"></small>
                                <small>9999 Views</small>
                            </div>
                            <div class="pe-3">
                                <small class="fa fa-comments me-1"></small>
                                <small>9999 Comments</small>
                            </div>
                        </div>
                        <p class="mb-4">
                        Care for your hair naturally by using gentle, chemical-free shampoos and conditioners. Maintain a balanced diet, stay hydrated, and avoid excessive heat styling. Regularly massage your scalp with natural oils, trim your hair to prevent split ends, and protect it from environmental damage. Practice stress management for overall health.</p>
                        <a href="" class="btn btn-outline-primary px-3">Read More</a>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                    <div class="blog-item border h-100 p-4">
                        <img class="img-fluid mb-4" src="img/blog-3.jpg" alt=""/>
                        <a href="" class="h5 lh-base d-inline-block">How to use our natural & organic shampoo</a>
                        <div class="d-flex text-black-50 mb-2">
                            <div class="pe-3">
                                <small class="fa fa-eye me-1"></small>
                                <small>9999 Views</small>
                            </div>
                            <div class="pe-3">
                                <small class="fa fa-comments me-1"></small>
                                <small>9999 Comments</small>
                            </div>
                        </div>
                        <p class="mb-4">To use our natural and organic shampoo, apply a small amount to wet hair and gently massage into your scalp. Allow the shampoo to sit for 5 minutes to let the ingredients work effectively. Rinse thoroughly with water, ensuring all residue is removed. Follow with a conditioner for best results.</p>
                        <a href="" class="btn btn-outline-primary px-3">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Blog End --> */}
{
    location==='/blog'?<Newsletter />:null
}
    </>
  )
}

export default Blog