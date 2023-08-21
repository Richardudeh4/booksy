import {ArrowLeftOutlined, TagOutlined } from '@ant-design/icons';
import React from 'react';
// import art1 from '../../public/img/art1.jpg'
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BookRecommendation = () => {
  return (
    // beginning of book recommendation
    <div>
    <div className="relative left-80 right-8 top-10 flex flex-row">
<div className="justify-center">
<h1> <ArrowLeftOutlined/>Back to Projects</h1>
         <div className="pt-8 flex gap-56 border-b-2  pb-8">
      <h1 className="text-xl">Book recommendation system</h1>
       
    <div className="flex flex-row gap-8 ">
    <p> Filter</p>
    <input type="text" placeholder='Search research items or books' className="rounded-xl border-2 w-72 h-6 text-center"/>
    </div>
    </div> 
  </div>

{/* ending of book recommendation */}

</div>
    {/* beginning of book recommendation grid */}
<div className=" absolute left-80 top-56 flex flex-row gap-4">
 <div className="h-72 w-52 rounded-xl border-transparent">
  <div className="w-full h-48 border-2 rounded-xl shadow-gray-500/50 bg-christ bg-cover bg-no-repeat bg-center">
  </div>


<h1 className="text-xl text-gray-900"> Death of thousand <br/>forests</h1>
<p>by Ming Charlton et al, 2012</p>
<div className="flex flex-row gap-2  text-green-400"><TagOutlined style={{color: "#3BC14A"}}/> Saved </div>
  </div>   
  <div className="h-72 w-52 rounded-xl border-transparent">
  <div className="w-full h-48 border-2 rounded-xl shadow-gray-500/50 bg-christ bg-cover bg-no-repeat bg-center">

  </div>


<h1 className="text-xl text-gray-900"> Death of thousand <br/>forests</h1>
<p>by Ming Charlton et al, 2012</p>
<div className="flex flex-row gap-2  text-green-400"><TagOutlined style={{color: "#3BC14A"}}/> Saved </div>
  </div>   
  <div className="h-72 w-52 rounded-xl border-transparent">
  <div className="w-full h-48 border-2 rounded-xl shadow-gray-500/50 bg-christ bg-cover bg-no-repeat bg-center">
  
  </div>


<h1 className="text-xl text-gray-900"> Death of thousand <br/>forests</h1>
<p>by Ming Charlton et al, 2012</p>
<div className="flex flex-row gap-2  text-green-400"><TagOutlined style={{color: "#3BC14A"}}/> Saved </div>
  </div>  
  <div className="h-72 w-52 rounded-xl border-transparent">
  <div className="w-full h-48 border-2 rounded-xl shadow-gray-500/50 bg-christ bg-cover bg-no-repeat bg-center">
  </div>
<h1 className="text-xl text-gray-900"> Death of thousand <br/>forests</h1>
<p>by Ming Charlton et al, 2012</p>
<div className="flex flex-row gap-2 text-green-400"><TagOutlined style={{color: "#3BC14A"}}/> Saved </div>
  </div>  
</div>
    </div>
  )
}

export default BookRecommendation
