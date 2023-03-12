import React from 'react'
import { useState } from 'react'
import camera from '../images/camera.png' ;
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Diet = ["Vegetarian", "Non-Vegetarian", "Eggitarian"]
function convertToBase64(file){
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result)
      };
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }
const SignUp = () => {
    const [file1, setFile1] = useState(camera);
    const [image1, setImage1] = useState("");
    const [choice, setChoice] = useState(false);
    const [ownerData,setOwnerData] = useState({name:"",mobile_no:"",email:"",password:"",messName:"",diet:"",location:"",time:"",cost:""});
    const [consumerData,setConsumerData] = useState({name:"",mobile_no:"",email:"",password:"",diet:"",lactoseIntolerent:false,allergy:"",location:""});
    
    const handleChange1 = async(e) => {
        console.log(e.target.files[0]);
        const file = e.target.files[0];
        setFile1(URL.createObjectURL(e.target.files[0]));
        const base64 = await convertToBase64(file);
        setImage1(base64);
    }

    const fileInput1 = React.createRef();
    function handleChange(event){
        const { name, value } = event.target;
        setOwnerData(prevState => ({
          ...prevState,
          [name]: value
      }));
      setConsumerData(prevState => ({
        ...prevState,
        [name]: value
    }));

      }

      const navigate = useNavigate();
      
      function handleSubmit(event){
        alert('A form was submitted: ' + consumerData);
        axios.post('http://localhost:8000/signup', consumerData)
        .then((response) => {
          console.log(response);
        }, (error) => {
          console.log(error);
        });
     
        event.preventDefault();
    }
     

  return (
    <div className="pt-20">
      <div className="flex justify-center align-middle">
        <button
          className="bg-black text-white px-4 py-2 rounded m-4"
          onClick={() => setChoice(true)}
        >
          Owner
        </button>
        <button
          className="bg-black text-white px-4 py-2 rounded m-4"
          onClick={() => setChoice(false)}
        >
          Consumer
        </button>
      </div>

      {choice ? (
        <div>
          <h1 className="text-center text-4xl font-bold py-6">
            Sign Up as Owner
          </h1>

          <form className="flex flex-col justify-center w-[30%] mx-[35%]"
           action="/signup"
           method="POST"
           enctype="multipart/form-data"
           onSubmit={handleSubmit}>
            <h2>Add Image:</h2>
            <div className="flex justify-center align-middle h-full">
              <input
                className="hidden"
                id="front-img"
                type="file"
                name="front-img"
                ref={fileInput1}
                onChange={handleChange1}
              />
              <label htmlFor="front-img">
                <img
                  className="w-[100%] h-[200px]"
                  src={file1}
                  alt="front side"
                />
              </label>
            </div>
            <label>Name</label>
            <input
              className="p-3 my-2 text-white bg-gray-700 rounded"
              type="text"
              name="name"
              value={ownerData.name}
              onChange={handleChange}
              required
            />

            <label>Phone Number</label>
            <input
              className="p-3 my-2 text-white bg-gray-700 rounded"
              type="tel"
              name="mobile_no"
              value={ownerData.mobile_no}
              onChange={handleChange}
              required
            />

            <label>Email</label>
            <input
              className="p-3 my-2 text-white bg-gray-700 rounded"
              type="email"
              name="email"
              value={ownerData.email}
              onChange={handleChange}
              required
            />

            <label>Password</label>
            <input
              className="p-3 my-2 text-white bg-gray-700 rounded"
              type="password"
              name="password"
              value={ownerData.password}
              onChange={handleChange}
              required
            />

            <label>Mess Name</label>
            <input
              className="p-3 my-2 text-white bg-gray-700 rounded"
              type="text"
              name="messName"
              value={ownerData.messName}
              onChange={handleChange}
              required
            />

            <label>Diet</label>
            <select
              className="p-3 my-2 text-white bg-gray-700 rounded"
              name="diet"
              onChange={handleChange}
              required
            >
              <option className="" value="" selected>
                {" "}
                &nbsp;&nbsp;&nbsp;Diet
              </option>
              {Diet.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <label>Location</label>
            <input
              className="p-3 my-2 text-white bg-gray-700 rounded"
              type="text"
              name="location"
              value={ownerData.location}
              onChange={handleChange}
              required
            />

            <label>Time</label>
            <input
              className="p-3 my-2 text-white bg-gray-700 rounded"
              type="text"
              name="time"
              value={ownerData.time}
              onChange={handleChange}
              required
            />

            <label>Cost per plate</label>
            <input
              className="p-3 my-2 text-white bg-gray-700 rounded"
              type="text"
              name="cost"
              value={ownerData.cost}
              onChange={handleChange}
              required
            />

            <button
              className="bg-black text-white px-4 py-2 text-xl rounded-md my-4"
              type="submit"
            >
              Create Profile
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h1 className="text-center text-4xl font-bold py-6">
            Sign Up as Consumer
          </h1>

          <form
            className="flex flex-col justify-center w-[30%] mx-[35%]"
            action="/signup"
            method="POST"
            enctype="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <label>Name</label>
            <input
              className="p-3 my-2 text-white bg-gray-700 rounded"
              type="text"
              name="name"
              value={ownerData.name}
              onChange={handleChange}
              required
            />

            <label>Phone Number</label>
            <input
              className="p-3 my-2 text-white bg-gray-700 rounded"
              type="tel"
              name="mobile_no"
              value={ownerData.mobile_no}
              onChange={handleChange}
              required
            />

            <label>Email</label>
            <input
              className="p-3 my-2 text-white bg-gray-700 rounded"
              type="email"
              name="email"
              value={ownerData.email}
              onChange={handleChange}
              required
            />

            <label>Password</label>
            <input
              className="p-3 my-2 text-white bg-gray-700 rounded"
              type="password"
              name="password"
              value={ownerData.password}
              onChange={handleChange}
              required
            />

            <label>Location</label>
            <input
              className="p-3 my-2 text-white bg-gray-700 rounded"
              type="text"
              name="location"
              value={ownerData.location}
              onChange={handleChange}
              required
            />

            <label>Diet</label>
            <select
              className="p-3 my-2 text-white bg-gray-700 rounded"
              name="diet"
              onChange={handleChange}
              required
            >
              <option className="" value="" selected>
                {" "}
                &nbsp;&nbsp;&nbsp;Diet
              </option>
              {Diet.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <label>Lactose Intolerent</label>
            <select
              className="p-3 my-2 text-white bg-gray-700 rounded"
              name="lactoseIntolerent"
            >
              <option value="false" selected>
                No
              </option>
              <option value="true">Yes</option>
            </select>

            <label>Allergy (from which Ingredient)</label>
            <input
              className="p-3 my-2 text-white bg-gray-700 rounded"
              type="text"
              name="allergy"
              value={ownerData.allergy}
              onChange={handleChange}
              required
            />

            <button
              className="bg-black text-white px-4 py-2 text-xl rounded-md my-4"
              type="submit"
            >
              Create Profile
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default SignUp
