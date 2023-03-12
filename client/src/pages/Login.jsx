import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full"
          src="https://images.unsplash.com/photo-1579113800032-c38bd7635818?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmVnZXRhYmxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="bg"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        
        <div className='fixed w-full px-4 py-24 z-50'>
        <div className="p-14  block m-auto bg-black/75 w-[400px] h-[450px]">
          <h1 className="font-bold text-4xl text-white">Login</h1>
          <form className="flex flex-col py-4">
            <input
              className="p-3 my-2 text-white bg-gray-700 rounded"
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="email"
            />
            <input
              className="p-3 my-2 text-white bg-gray-700 rounded"
              type="email"
              name="password"
              placeholder="Password"
              autoComplete="current-password"
            />
            <button className="p-3 my-2 text-white bg-blue-500 rounded">Login</button>

            <div className='flex justify-between items-center text-sm text-gray-600'>
                  <p>
                    <input className='mr-2' type='checkbox' />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
          </form>
          <div className="text-gray-600 flex justify-center align-center">
          <p>New to BookMate?</p>
          <Link className='text-white font-bold' to="/signup">SignUp</Link>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Login;
