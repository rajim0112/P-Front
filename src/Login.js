import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validate from './LoginValidate'
import axios from 'axios'

const Login = () => {

    const [values, setValues] = useState({
        email:'',
        password:''
    })

    const navigate = useNavigate();

    const [errors, setErrors] = useState({})
    const handleInput=(e) => {
        setValues(prev => ({...prev,[e.target.name]: [e.target.value] }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(Validate(values));
        setErrors(Validate(values));
            if(errors.email === "" && errors.password === "") {
                axios.post('http://localhost:8081/login', values)
                // axios.post('https://p-back.vercel.app/login', values)
                .then(res => {
                    if(res.data === "Success") {
                        navigate('/home');
                    } else {
                        alert("No record exists");
                    }
                })
                .catch(err => console.log(err));
            }
    }


  return (
    <div className='login'>
        <div className='login-box'>
            <form action="" onSubmit={handleSubmit}>
                <h2 className='head2'>Sign-In</h2>
                <div className='mb-3'>
                    <label htmlFor='email'><strong>Email:</strong></label>
                    <input type='email' placeholder='Enter Email' name='email'
                    onChange={handleInput} className='form-control rounded-0'/>
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'><strong>Password:</strong></label>
                    <input type='password' placeholder='Enter password' name='password'
                    onChange={handleInput} className='form-control rounded-0'/>
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>
                <button className='btn btn-success w-100 rounded-0'><strong>Log in</strong></button>
                <p>You are Agree with terms & conditions</p>
                <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0'>Create Account</Link>
            </form>
        </div>
    </div>
  )
}

export default Login