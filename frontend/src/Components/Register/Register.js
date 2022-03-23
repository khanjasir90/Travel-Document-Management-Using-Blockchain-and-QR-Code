import React from 'react';
import { useState } from 'react';

const Register = () => {
    const [info, setInfo] = useState({
        firstname:"",
        lastname:"",
        email:"",
        aadhaarNumber:0,
        phoneNumber:0,
        dob:"",
        password:""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if(info.aadhaarNumber.toString().length < 12){
            return
        }
        if(info.phoneNumber.toString().length === 10){
            return
        }
    }

    return (
        <div
            class="min-h-screen flex flex-col items-center justify-center bg-gray-100"
        >
            <div
                class="
          flex flex-col
          bg-white
          shadow-md
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          py-8
          rounded-3xl
          w-50
          max-w-md
        "
            >
                <div class="font-medium self-center text-xl sm:text-3xl text-gray-800">
                    Join us Now
                </div>
                <div class="mt-4 self-center text-xl sm:text-sm text-gray-800">
                    Enter your credentials to get access account
                </div>

                <div class="mt-10">
                    <form action="#">
                        <div class="flex flex-col mb-5">
                            <label
                                for="email"
                                class="mb-1 text-xs tracking-wide text-gray-600"
                            >Firstname:</label
                            >
                            <div class="relative">
                                <div
                                    class="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                                >
                                    <i class="fas fa-user text-blue-500"></i>
                                </div>

                                

                                <input
                                    id="firtname"
                                    type="text"
                                    name="firstname"
                                    value={info.firstname}
                                    onChange={(e) => {setInfo({...info, firstname: e.target.value})}}
                                    class="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                                    placeholder="Enter your first name"
                                />
                            </div>
                        </div>

                        {/* lastname */}
                        <div class="flex flex-col mb-5">
                            <label
                                for="email"
                                class="mb-1 text-xs tracking-wide text-gray-600"
                            >Lastname:</label
                            >
                            <div class="relative">
                                <div
                                    class="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                                >
                                    <i class="fas fa-user text-blue-500"></i>
                                </div>

                                

                                <input
                                    id="lastname"
                                    type="text"
                                    name="lastname"
                                    value={info.lastname}
                                    onChange={(e) => {setInfo({...info, lastname: e.target.value})}}
                                    class="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                                    placeholder="Enter your last name"
                                />
                            </div>
                        </div>

                                                {/* DOB */}
                                                <div class="flex flex-col mb-5">
                            <label
                                for="email"
                                class="mb-1 text-xs tracking-wide text-gray-600"
                            >DOB:</label
                            >
                            <div class="relative">
                                <div
                                    class="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                                >
                                    <i class="fas fa-solid fa-calendar-check text-blue-500"></i>
                                </div>

                                

                                <input
                                    id="dob"
                                    type="date"
                                    name="dob"
                                    value={info.dob}
                                    onChange={(e) => {setInfo({...info, dob: e.target.value})}}
                                    class="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                                    placeholder="Enter your DOB"
                                />
                            </div>
                        </div>
                        {/* EMAIL */}

                        <div class="flex flex-col mb-5">
                            <label
                                for="email"
                                class="mb-1 text-xs tracking-wide text-gray-600"
                            >E-Mail Address:</label
                            >
                            <div class="relative">
                                <div
                                    class="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                                >
                                    <i class="fas fa-at text-blue-500"></i>
                                </div>

                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={info.email}
                                    onChange={(e) => {setInfo({...info, email: e.target.value})}}
                                    class="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>



                        {/* AADHAR NUMBER */}
                        <div class="flex flex-col mb-5">
                            <label
                                for="email"
                                class="mb-1 text-xs tracking-wide text-gray-600"
                            >Aadhaar Number:</label
                            >
                            <div class="relative">
                                <div
                                    class="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                                >
                                    <i class="fas fa-user text-blue-500"></i><i class="fas fa-solid fa-arrow-down-1-9 text-blue-500"></i>
                                </div>

                                

                                <input
                                    id="addharNumber"
                                    type="number"
                                    name="addharNumber"
                                    value={info.aadhaarNumber}
                                    onChange={(e) => {setInfo({...info, aadhaarNumber: e.target.value})}}
                                    class="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                                    placeholder="Enter your aadhaar card number"
                                />
                            </div>
                        </div>

                        {/* PHONE NUMBER */}
                        <div class="flex flex-col mb-5">
                            <label
                                for="email"
                                class="mb-1 text-xs tracking-wide text-gray-600"
                            >Phone Number:</label
                            >
                            <div class="relative">
                                <div
                                    class="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                                >
                                    <i class="fas fa-user text-blue-500"></i>
                                </div>

                                

                                <input
                                    id="phoneNumber"
                                    type="number"
                                    name="phoneNumber"
                                    value={info.phoneNumber}
                                    onChange={(e) => {setInfo({...info, phoneNumber: e.target.value})}}
                                    class="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                                    placeholder="Enter your phone number"
                                />
                            </div>
                        </div>

                        {/* PASSWORD */}
                        <div class="flex flex-col mb-6">
                            <label
                                for="password"
                                class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                            >Password:</label
                            >
                            <div class="relative">
                                <div
                                    class="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                                >
                                    <span>
                                        <i class="fas fa-lock text-blue-500"></i>
                                    </span>
                                </div>

                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={info.password}
                                    onChange={(e) => {setInfo({...info, password: e.target.value})}}
                                    class="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                                    placeholder="Enter your password"
                                />
                            </div>
                        </div>

                        <div class="flex w-full">
                            <button
                                type="submit"
                                class="
                  flex
                  mt-2
                  items-center
                  justify-center
                  focus:outline-none
                  text-white text-sm
                  sm:text-base
                  bg-blue-500
                  hover:bg-blue-600
                  rounded-2xl
                  py-2
                  w-full
                  transition
                  duration-150
                  ease-in
                "
                            >
                                <span class="mr-2 uppercase">Sign Up</span>
                                <span>
                                    <svg
                                        class="h-6 w-6"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="flex justify-center items-center mt-6">
                <a
                    href="/login"
                    target="_blank"
                    class="
            inline-flex
            items-center
            text-gray-700
            font-medium
            text-xs text-center
          "
                >
                    <span class="ml-2"
                    >You have an account?
                        <a
                            href="/login"
                            class="text-xs ml-2 text-blue-500 font-semibold"
                        >Login here</a
                        ></span
                    >
                </a>
            </div>
        </div>
    )
}

export default Register