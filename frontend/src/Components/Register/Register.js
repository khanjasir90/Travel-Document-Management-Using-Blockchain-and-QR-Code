import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import './Register.css';
import LoginImg from "../../assets/images/login.svg";
import Login from "./login.jpg";
import { axiosInstance } from '../../AxiosInstance';

const RegisterScreen = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [info, setInfo] = useState({
    name: '',
    email: '',
    aadhaarNumber: 0,
    dob: '',
    password: '',
  });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (info.aadhaarNumber.toString().length < 12) {
  //     return;
  //   }
  //   if (info.phoneNumber.toString().length === 10) {
  //     return;
  //   }
  // };

  useEffect(() => {
    if (localStorage.getItem('authToken')) {
      history.push('/');
    }
  }, [history]);

  const RegisterHandler = async (e) => {
      e.preventDefault();

      const config = {
          header: {
              "Content-Type": "application/json"
          }
      }

      try {
          const {data} = await axiosInstance.post("/api/auth/login", { email, password}, config);
          console.log(data)
          localStorage.setItem("id", data.id);
          localStorage.setItem("authToken", data.token);

          history.push("/")

      } catch (error) {
          setError(`Email or password is incorrect`)
          setTimeout(() => {
              setError("")
          }, 7000);
      }
  }

  return (
    <div className='login-screen'>
      <div className='imgBx'>
      <img src={LoginImg} alt="loginimage" className='Login_image'/>
      </div>
      <div className='contentBx'>
        <div className='formBx'>
          <h2 style={{marginBottom:"0"}}>Register</h2>
          {error && (
            <div className='error-message' style={{ marginBottom: '5px' }}>
              <Alert variant='danger'>{error}</Alert>
            </div>
          )}
          <form onSubmit={(e) => RegisterHandler(e)}>
            <div class='mt-10'>
              <form action='#'>
                <div class='flex flex-col mb-5'>
                  <label
                    for='email'
                    class='mb-1 text-xs tracking-wide text-gray-600 register_label'
                  >
                    Name:
                  </label>
                  <div class='relative'>
                    <div
                      class='inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400'
                    >
                      <i class='fas fa-user' style={{color:"#1D3557"}}></i>
                    </div>

                    <input
                      id='firtname'
                      type='text'
                      name='firstname'
                      value={info.firstname}
                      onChange={(e) => {
                        setInfo({ ...info, firstname: e.target.value });
                      }}
                      class='text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 register_input'
                      placeholder='Enter Name'
                    />
                  </div>
                </div>

                {/* DOB */}
                <div class='flex flex-col mb-5'>
                  <label
                    for='email'
                    class='mb-1 text-xs tracking-wide text-gray-600 register_label'
                  >
                    DOB:
                  </label>
                  <div class='relative'>
                    <div
                      class='inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400'
                    >
                      <i class='fas fa-solid fa-calendar-check' style={{color:"#1D3557"}}></i>
                    </div>

                    <input
                      id='dob'
                      type='date'
                      name='dob'
                      value={info.dob}
                      onChange={(e) => {
                        setInfo({ ...info, dob: e.target.value });
                      }}
                      class='text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 register_input'
                      placeholder='Enter your DOB'
                    />
                  </div>
                </div>
                {/* EMAIL */}
                
                
                <div class='flex flex-col mb-5'>
                  <label
                    for='email'
                    class='mb-1 text-xs tracking-wide text-gray-600 register_label'
                  >
                    E-Mail Address:
                  </label>
                  <div class='relative'>
                    <div
                      class='inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400'
                    >
                      <i class='fas fa-at' style={{color:"#1D3557"}}></i>
                    </div>

                    <input
                      id='email'
                      type='email'
                      name='email'
                      value={info.email}
                      onChange={(e) => {
                        setInfo({ ...info, email: e.target.value });
                      }}
                      class='text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 register_input'
                      placeholder='Enter Email'
                    />
                  </div>
                </div>

                {/* AADHAR NUMBER */}
                <div class='flex flex-col mb-5'>
                  <label
                    for='email'
                    class='mb-1 text-xs tracking-wide text-gray-600 register_label'
                  >
                    Aadhaar Number:
                  </label>
                  <div class='relative'>
                    <div
                      class='inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400'
                    >
                      <i class='fas fa-user' style={{color:"#1D3557"}}></i>
                      <i class='fas fa-solid fa-arrow-down-1-9' style={{color:"#1D3557"}}></i>
                    </div>

                    <input
                      id='addharNumber'
                      type='number'
                      name='addharNumber'
                      value={info.aadhaarNumber}
                      onChange={(e) => {
                        setInfo({ ...info, aadhaarNumber: e.target.value });
                      }}
                      class='text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 register_input'
                      placeholder='Enter Aadhaar card number'
                    />
                  </div>
                </div>

                {/* PASSWORD */}
                <div class='flex flex-col mb-6'>
                  <label
                    for='password'
                    class='mb-1 text-xs sm:text-sm tracking-wide text-gray-600'
                  >
                    Password:
                  </label>
                  <div class='relative'>
                    <div
                      class='inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400'
                    >
                      <span>
                        <i class='fas fa-lock' style={{color:"#1D3557"}}></i>
                      </span>
                    </div>

                    <input
                      id='password'
                      type='password'
                      name='password'
                      value={info.password}
                      onChange={(e) => {
                        setInfo({ ...info, password: e.target.value });
                      }}
                      class='text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 register_input'
                      placeholder='Enter your password'
                    />
                  </div>
                </div>
                <div className="inputBx">
                    <input type="submit" value="Register" />
                </div>
                <div className="inputBx">
                    <p>Don't have an account? <Link to="/register" className="signupLink">Login</Link></p>
                </div>
              </form>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
