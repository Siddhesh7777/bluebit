import React from 'react'
import { BsShareFill } from 'react-icons/bs'
import { RxStarFilled } from 'react-icons/rx'
import Gpay from '../components/Gpay'


const Mess = () => {
  return (
    <div className="flex justify-center w-[60%] m-auto bg-gray-100">
      <div className="Info1">
        <div className="col1">
          
            <div className='flex justify-center align-middle w-[60%] h-[440px] m-auto mt-[10%]'>
              <img className='p-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJR2NPybRPXywshiZdsqrISOUadwFTe19p38nE1yh7jQ&usqp=CAU&ec=48600113" alt="front"></img>
              <img className='p-4' src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/n/v/m53131-15511816105c75272ab2dc2.jpg?tr=tr:n-xlarge" alt="back"></img>
            </div>
          
        </div>

        <div className="flex justify-between align-middle w-full p-4">
          <div className="w-[20%]">
            <div className="flex justify-between align-middle">
              <h2 className='font-bold text-xl'>&#8377; 70</h2>
              {/* <div>
                <BsShareFill className="" />
              </div> */}

              {/* {fav?
               <div>
               {(fav.indexOf(data._id)!==-1)?<MdFavorite onClick={"()=>(setFavorite(!favorite))"} className="" /> : <MdFavoriteBorder onClick={"()=>(setFavorite(!favorite))"} className="" />}
             </div>:
             <div><MdFavoriteBorder  className="" /></div>}  */}
             
            </div>

            <div className='font-bold text-xl'>
              <h4 className='font-bold text-xl'>Laxi Restaurent</h4>
              <div className="flex text-yellow-300"><RxStarFilled/><RxStarFilled/><RxStarFilled/><RxStarFilled/><RxStarFilled/></div>
            </div>

            <div className=' text-xl'>
              <p>Akurdi</p>
              <p>
                6:00am - 9:00pm
              </p>
            </div>
          </div>

          <div className="w-[30%]">
            <h3 className='text-xl font-bold'>Contact:<p className='text-xl font-normal pb-4'>9846489635</p></h3>

            <label>Subscribe For Monthly Mess</label>
            <button  ><Gpay/></button>
          </div>

          <div className="p-4">
            <h4 className='text-xl font-bold'>Akurdi</h4>
            <img
              alt="maps"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ25K7sVKkDwHK9Cs-4UbhFhoaWZOBKzlLML4R6aoRFAGjV4cnT-9xN1Cc2k6sC_KcDO0&usqp=CAU"
              className="rounded"
            ></img>
            
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Mess
