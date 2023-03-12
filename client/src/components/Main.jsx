import React from "react";
import { Link } from "react-router-dom";
import Explore from "../pages/Explore";

const Main = () => {
  return (
    <div>
      <div className="flex justify-between p-[5%] pt-[7%] ">
        <div className="w-[50%] flex flex-col pd-[10%] justify-center">
          <h1 className="text-6xl ">Finding the Best For You</h1>
          <p className="pt-[5%] pb-[5%] text-3xl">
            Welcome to our website ,Where we make it easy for you to save your
            time from the busy schedulde. our website makes it so much
            convenient for the user and the owner
          </p>
          <button
            className="bg-black text-white px-4 py-2 rounded w-[50%]  text-2xl
      "
          >
            <Link to="/explore">Explore Messes</Link>
          </button>
        </div>
        <div className=" w-[40%] h-auto">
          <img
            className="w-full rounded "
            src="https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
          ></img>
        </div>
      </div>

      <div className="w-[100%] h-[600px]">
        <h1 className="text-5xl  text-center p-4">About Us</h1>
        <div className="flex justify-between align-middle w-full h-[500px]">
          <div className="w-[40%] p-14">
            <div className="absolute z-[105] w-[15%] h-[270px] pb-28 bg-black opacity-50"></div>
            <img
              className="absolute z-[100] w-[15%] h-[380px] pb-28"
              src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="food"
            ></img>
            <img
              className="absolute z-[110] w-[25%] h-[380px] pt-28 pl-28"
              src="https://images.unsplash.com/photo-1536489885071-87983c3e2859?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGluZGlhbiUyMGN1aXNpbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="food"
            ></img>
          </div>
          <div className="w-[60%] flex flex-col justify-center align-middle">
            <p className="text-2xl p-4">
              We understand that everyone's dietary needs and preferences are
              unique, which is why we offer a variety of customizable meal plans
              that can be tailored to suit your individual needs. Whether you're
              looking for a low-carb, high-protein, or gluten-free diet, we've
              got you covered.
            </p>

            <div className="flex justify-evenly align-middle bg-pink-300 text-gray-700 font-bold rounded-md py-8 mx-4 mb-4 mt-5">
              <div className="w-full text-center border-r">
                <h1>2000+</h1>
                <p>Messes</p>
              </div>
              <div className="w-full text-center border-r">
                <h1>20000+</h1>
                <p>Customers</p>
              </div>
              <div className="w-full text-center">
                <h1>500+</h1>
                <p>Different locations</p>
              </div>
            </div>
            <button className="bg-black text-white w-[20%] px-4 py-2 rounded mt-4 m-auto">
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
