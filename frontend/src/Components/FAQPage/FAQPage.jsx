import React, { useEffect } from 'react';
import './FAQPage.css';
import { Link } from 'react-router-dom';

const FAQPage = () => {
    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    },[])
    return (
        <div className="faq-page">
            <header className="faq-header">
                <h1>Indu enterprises FAQ Center</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/product">Products</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </header>
            <main className="faq-content">
                <section className="faq-section">
                    <h2>Frequently Asked Questions</h2>
                    <div className="faq-item">
                        <h3>How can I place an order?</h3>
                        <p>You can place an order by adding items to your cart and proceeding to checkout.</p>
                    </div>
                    <div className="faq-item">
                        <h3>What are your shipping options?</h3>
                        <p>We offer standard and express shipping options. Details are available at checkout.</p>
                    </div>
                    <div className="faq-item">
                        <h3>Can I return a product?</h3>
                        <p>Yes, you can return a product within 30 days of purchase. Please read our return policy for more details.</p>
                    </div>
                </section>
                <section className="contact-section">
                    <h2>Contact Us</h2>
                    <p>If you have any other questions, feel free to contact us at <Link to="mailto:support@Indu enterprises.com">support@Indu enterprises.com</Link>.</p>
                </section>
            </main>
            <footer className="faq-footer">
                <p>&copy; 2024 Indu enterprises. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default FAQPage;
