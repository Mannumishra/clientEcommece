import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginForm.css';
import axios from 'axios';
import toast from 'react-hot-toast';

const LoginForm = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const getInputData = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }
    const postData = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("https://hapsserver.onrender.com/api/user/login", data)
            console.log(res)
            if (res.status === 200 && res.data.data.role === "Admin") {
                toast.success("Login Successfully")
                sessionStorage.setItem("login", true)
                // sessionStorage.setItem("userid", res.data.data._id)
                // sessionStorage.setItem("name", res.data.data.name)
                // sessionStorage.setItem("email", res.data.data.email)
                // sessionStorage.setItem("phone", res.data.data.phone)
                navigate("/dashboard")
                window.location.reload()
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Login</h2>
                <form onSubmit={postData}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required onChange={getInputData} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required onChange={getInputData} />
                    </div>
                    <button type="submit">Login</button>
                </form>
                <p className="signup-link">
                    If you don't have an account, please <Link to="/signup">sign up</Link>.
                </p>
            </div>
        </div>
    );
};

export default LoginForm;
