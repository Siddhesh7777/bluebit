import React from 'react'
import Search from '../components/Search'
import Card from '../components/Card'
import data from '../Data'
const Explore = () => {
  data.map((item)=>(console.log(item)))
  console.log(data[0].name);
  const Data = data;
  return (
    <div>
      <Search/>
      <div className='grid grid-cols-3  m-auto p-10 gap-5 justify-items-center w-[90%] pt-[10%] '>
        {data.map((item)=>(<Card item={item}/>))}
          {/* <div className='w-full'>
            <Card/>
          </div>
          <div className='w-full'>
            <Card/>
          </div>
          <div className='w-full'>
            <Card/>
          </div>
          <div className='w-full'>
            <Card/>
          </div>
          <div className='w-full'>
            <Card/>
          </div>
          <div className='w-full'>
            <Card/>
          </div>
          <div className='w-full'>
            <Card/>
          </div>

          <div className='w-full'>
            <Card/>
          </div>
          <div className='w-full'>
            <Card/>
          </div>
          <div className='w-full'>
            <Card/>
          </div>
          <div className='w-full'>
            <Card/>
          </div>
          <div className='w-full'>
            <Card/>
          </div> */}

          
          </div>
    </div>
  )
}

export default Explore
