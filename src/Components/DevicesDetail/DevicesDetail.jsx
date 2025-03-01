import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ProductDetails from '../ProductDetails/ProductDetails';

const DevicesDetail = () => {


const {product_id} = useParams()

const devicesData = useLoaderData()
const device = devicesData.find(item=>item.product_id===product_id)



    return (
<div className=''>

<div className='bg-[#9538E2] roundedlg -mt-3'>
            <h2 className='text-3xl font-bold text-white pt-10 text-center mb-4'>Product Details</h2>
            <p className='text-white text-center pb-10'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all.</p>
        </div>
<div className="card card-side bg-base-100 shadow-sm pb-5">
    
    <figure className='m-8'>
      <img className='w-[424.31px]  rounded-4xl'
        src={device.product_image}
        alt="Movie" />
    </figure>
    <div className=" mt-5">
      <h2 className="text-4xl font-bold">{device.product_title}</h2>
      <p className='text-2xl font-light mt-3'> Price: {device.price}</p>
  <button className='bg-[#309C081A] rounded-full p-2 text-[#309C08] font-semibold mt-3'>
      {device.availability}
  </button>
  
  <p className='mt-4'>{device.description}</p>
  <div>
  <h2 className='mt-4 font-bold text-xl'>Specifications</h2>
  <ol>
      {device.Specification.map((spec,idx)=> <li key={idx}>
  {idx+1}: {spec}
      </li>)}
  </ol>
  
  </div>
  
  <p className='
  font-bold text-2xl mt-4'>Ratings</p>
  <div className='flex items-center justify-between mt-3'>
  <i class="fa-solid fa-star"></i>
  <p>{device.rating}</p>
  </div>
  
  <div className='flex gap-5 items-center mt-4'>
  <button className='bg-[#9538E2] p-2 px-5 text-white font-bold rounded-full '>Add to Cart</button>
  <i className="fa-solid fa-heart border rounded-full p-3"></i>
      
  </div>
    </div>
  </div>
</div>
    );
};

export default DevicesDetail;