import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validate from './SignupValidate';
import axios from 'axios';


function Signup() {

    const [values, setValues] = useState({
            name:'',
            email:'',
            password:''
        })

        const navigate = useNavigate();

        const [errors, setErrors] = useState({})
        const handleInput=(e) => {
            setValues(prev => ({...prev,[e.target.name]:[e.target.value]}))
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            setErrors(Validate(values));
            if(errors.name === "" && errors.email === "" && errors.password === "") {
                // axios.post('http://localhost:8081/signup', values)
                axios.post('https://p-back.vercel.app//signup', values)
                .then(res => {
                    navigate('/');
                })
                .catch(err => console.log(err));
            }
        }

  return (
    <div className='sign'>
        <div className='sign-box'>
            <h2 className='head1'> Sign-Up</h2>
            <form action="" onSubmit={handleSubmit}>
            <div className='mb-3'>
                    <label htmlFor='name'><strong>Name:</strong></label>
                    <input type='text' placeholder='Enter Your Name' name='name'
                    onChange={handleInput} className='form-control rounded-0'/>
                    {errors.name && <span className='text-danger'>{errors.name}</span>}
                </div>
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
                <button className='btn btn-success w-100 rounded-0'><strong>Sign up</strong></button>
                <p>You are Agree with terms & conditions</p>
                <Link to="/" className='btn btn-default border w-100 bg-light rounded-0'>Login</Link>
            </form>
        </div>
    </div>
  )
}

export default Signup
