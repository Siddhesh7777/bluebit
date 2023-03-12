import React from 'react'
import { Link } from 'react-router-dom'


const Card = (props) => {
  return (
   <Link to='/mess'>
    <div className='flex  align-middle justify-center bg-gray-200 rounded-md cursor-pointer h-[200px]'>
      <div className=' w-[100%] p-4'>
            <img className='w-full h-full' src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/08/07/Pictures/_ec38addc-b906-11e9-a203-e6c4ad816de5.jpg" alt="sds"/>
      </div>
        <div className='p-4 w-[80%]'>
            <h3 className='font-bold '>{props.item.name}</h3>
            <h3 className='font-bold'>Timing :<p className='font-normal text-sm'>{props.item.time}</p>
            </h3>
            <h3 className='font-bold '> Today`s Meal: <p className='font-normal text-sm'>{props.item.meal}</p></h3>
            <h3 className='font-bold '>Location:<p className='font-normal text-sm'>{props.item.location}</p> </h3>
        </div>
    </div>
   </Link>
  )
}

export default Card
