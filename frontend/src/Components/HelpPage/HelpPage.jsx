import React, { useEffect } from 'react';
import './HelpPage.css';
import { Link } from 'react-router-dom';

const HelpPage = () => {
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    },[])
    return (
        <div className="help-page">
            <header className="help-header">
                <h1>HAPS Help Center</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/product">Products</Link></li>
                    </ul>
                </nav>
            </header>
            <main className="help-content">
                <section className="faq">
                    <h5>Frequently Asked Questions</h5>
                    <div className="faq-item">
                        <h6>How can I place an order?</h6>
                        <p>You can place an order by adding items to your cart and proceeding to checkout.</p>
                    </div>
                    <div className="faq-item">
                        <h6>What are your shipping options?</h6>
                        <p>We offer standard and express shipping options. Details are available at checkout.</p>
                    </div>
                </section>
                <section className="contact">
                    <h5>Contact Us</h5>
                    <p>If you have any other questions, feel free to contact us at <Link to="mailto:support@haps.com">support@haps.com</Link>.</p>
                </section>
            </main>
            <footer className="help-footer">
                <p>&copy; 2024 HAPS. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HelpPage;
