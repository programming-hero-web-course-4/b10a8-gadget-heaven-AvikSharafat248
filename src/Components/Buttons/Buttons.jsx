import React from 'react';

const Buttons = () => {
    return (
        <div className="w-1/3 flex justify-center mt-20 mx-auto">
        <div className="bg-white w-[140px] h-[340px] text-center grid mx-auto md:grid-cols-1 md:flex-col items-center rounded-2xl p-4 ">
     
          {[
            "All Products",
            "Laptops",
            "Accessories",
            "Smart Watches",
            "Macbooks",
            "iPhones",
          ].map((category, index) => (
            <button
              key={index}
              className="bg-[#09080F0D] w-full py-2 rounded-full mt-2 text-sm font-medium   hover:bg-[#9538E2] hover:text-white"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    );
};

export default Buttons;