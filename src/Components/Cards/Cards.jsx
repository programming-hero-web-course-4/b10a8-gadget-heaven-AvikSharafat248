import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cards = ({ accessory }) => {

const{product_id, product_image, product_title, price, availability,rating, brand} = accessory

const navigate = useNavigate()


    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden  max-w-xs mx-auto mb-20">
            <figure className=''>
                <img src={accessory.product_image} alt={accessory.product_title} className="w-full h-48 object-cover rounded-lg " />
            </figure>
            <div className="p-4">
                <h2 className="text-lg font-bold">{accessory.product_title}</h2>
             
            
                    <span className="text-xl font-semibold">${accessory.price}</span> <br /> <br />

                    <button onClick={()=> navigate(`/devices/${product_id}`)} className="bg-white p-2 rounded-full text-[#7a43a7] border border-[#9538E2]">View Details</button>
         
            </div>
        </div>
    );
};

export default Cards;
