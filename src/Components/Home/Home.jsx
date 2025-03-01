import React from 'react';
import Buttons from '../Buttons/Buttons';
import Accessories from '../Accessories/Accessories';

const Home = () => {
    return (
        <div className="flex flex-col md:flex-row mx-auto">
       
          <Buttons></Buttons>
          <Accessories />
            </div>
   
    );
};

export default Home;
