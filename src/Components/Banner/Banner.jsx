import React from 'react';

import banner from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div>
                 <div className="flex flex-col items-center text-center pb-50 bg-[#9538E2] rounded-xl -mt-4">
              <h2 className="text-white font-bold text-4xl mt-14">
                Update Your Accessories with Our Awesome Gadget Shop
              </h2>
              <p className="text-white w-[500px] mt-8 mb-8">
                Explore our latest gadgets that will take your experience to a whole new level. For our coolest accessories please check our website.
              </p>
              <button className="bg-white text-[#9538E2] p-3 rounded-full">
                Shop Now
              </button>
            </div>
            
               <div className='flex justify-center'>
               <img className='absolute w-[638px] h-auto mx-auto -mt-40  border rounded-2xl' src={banner} alt="" />
               </div>
            
        </div>
    );
};

export default Banner;