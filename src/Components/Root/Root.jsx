import React from 'react';
import Header from '../Header/Header';

import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div className='bg-[#09080F0D]'>
            <div className='max-w-7xl mx-auto mt-10'>
            <div className='bg-no-repeat rounded-xl '>
                <Header></Header>
             <Outlet></Outlet>
             <Footer></Footer>
            </div>
        </div>
        </div>
    );
};

export default Root;
