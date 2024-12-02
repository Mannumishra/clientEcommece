import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUpForm.css';
import axios from 'axios';
import toast from 'react-hot-toast';

const SignUpForm = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    })
    const getInputData = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }
    const postData = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("https://hapsserver.onrender.com/api/user", data)
            if (res.status === 200) {
                toast.success("Signup Successfully")
                navigate("/login")
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <div className="signup-container">
            <div className="signup-form">
                <h2>Sign Up</h2>
                <form onSubmit={postData}>
                    <div className="form-group">
                        <label htmlFor="username">Name<sup className='text-danger'>*</sup></label>
                        <input type="text" id="username" name="name" required onChange={getInputData} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email<sup className='text-danger'>*</sup></label>
                        <input type="email" id="email" name="email" required onChange={getInputData} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Phone<sup className='text-danger'>*</sup></label>
                        <input type="number" id="password" name="phone" required onChange={getInputData} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password">Password<sup className='text-danger'>*</sup></label>
                        <input type="password" id="confirm-password" name="password" required onChange={getInputData} />
                        <p className='text-danger' style={{fontSize:"10px"}}>Your password must be at least 6 characters, include an uppercase letter, a number, and a special symbol.</p>
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
                <p className="login-link">
                    If you already have an account, please <Link to="/login">login</Link>.
                </p>
            </div>
        </div>
    );
};

export default SignUpForm;
