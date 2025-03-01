import React from 'react';

const Footer = () => {
    return (
        <div>
            <h2 className='text-center text-3xl mt-10'>Gadget Awesome</h2>
            <p className='
            text-center mb-4'>Leading The Way in Technology Field</p>
            <hr />

            <div className='grid md:grid-rows-2 lg:grid-cols-3 mx-auto
            mt-6 text-center'>

            <div>
                <h2 className='font-bold text-[18px] mb-2'>Services</h2>

                <p>Product Supprt</p>
                <p>Order  Tracking</p>
                <p>Shipping & Delivery</p>
                <p>Returns</p>
            </div>

            <div>
                <h2 className='font-bold text-[18px] mb-2'>Company</h2>

                <p>About Us</p>
                <p>Careers</p>
                <p>Contact</p>
           
            </div>

            <div>
                <h2 className='font-bold text-[18px] mb-2'>Legal</h2>

                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Cookies Policy</p>
         
            </div>

            </div>
        </div>
    );
};

export default Footer;