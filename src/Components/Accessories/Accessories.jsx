import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';

const Accessories = () => {
    const [accessories, setAccessories] = useState([]);

    useEffect(() => {
        fetch('/devicesData.json')
            .then(res => res.json())
            .then(data => setAccessories(data));
    }, []);

    return (
        <div className="w-full px-4">
            <h2 className="text-3xl font-bold text-center mb-6">Explore Cutting Edge Technologies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {accessories.map(accessory => (
                    <Cards key={accessory.product_id} accessory={accessory} />
                ))}
            </div>
        </div>
    );
};

export default Accessories;
