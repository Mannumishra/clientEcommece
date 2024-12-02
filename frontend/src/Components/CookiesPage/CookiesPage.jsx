import React, { useEffect } from 'react';
import './CookiesPage.css';
import { Link } from 'react-router-dom';

const CookiesPage = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <div className="cookies-page">
            <header className="cookies-header">
                <h1>Cookies Policy</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/product">Products</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </header>
            <main className="cookies-content">
                <section className="cookies-section">
                    <h2>What are cookies?</h2>
                    <p>
                        Cookies are small text files that are stored on your device when you visit a website. They are used to remember your preferences and enhance your user experience.
                    </p>
                </section>
                <section className="cookies-section">
                    <h2>How we use cookies</h2>
                    <p>
                        We use cookies to improve your browsing experience by:
                    </p>
                    <ul>
                        <li>Remembering your preferences and settings</li>
                        <li>Personalizing content and ads</li>
                        <li>Analyzing site traffic and performance</li>
                    </ul>
                </section>
                <section className="cookies-section">
                    <h2>Managing cookies</h2>
                    <p>
                        You can control and manage cookies through your browser settings. However, disabling cookies may affect your experience on our site.
                    </p>
                </section>
                <section className="cookies-section">
                    <h2>Contact Us</h2>
                    <p>
                        If you have any questions about our use of cookies, please contact us at <Link to="mailto:support@Indu enterprises.com">support@Indu enterprises.com</Link>.
                    </p>
                </section>
            </main>
            <footer className="cookies-footer">
                <p>&copy; 2024 Indu enterprises. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default CookiesPage;
