import React from 'react';
import Buttons from '../Buttons/Buttons';
import Accessories from '../Accessories/Accessories';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>

<Banner></Banner>
          
          <div className="flex flex-col md:flex-row mx-auto mt-80">
       
       <Buttons></Buttons>
       <Accessories />
         </div>
        </div>
   
    );
};

export default Home;
    