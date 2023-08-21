import React from 'react'
import {FilterOutlined} from '@ant-design/icons'
const IntroHeading = () => {
  return (
<div className="pt-24 flex gap-56 border-b-2 ">
    <div className='flex flex-row gap-10 pb-12'>
    <div className="rounded-full bg-red-200 ">hey</div>
      <h1 className="text-xl">WELCOME BACK, TOLANI</h1>
      </div>
       
    <div className="flex flex-row gap-8 absolute right-14">
    <p><FilterOutlined /> Filter</p>
    <input type="text" placeholder='Search research items or books' className="rounded-xl border-2 w-72 h-6 text-center"/>
    </div>
  
  </div>
  )
}

export default IntroHeading
