import React from 'react';
import { FaStar, } from 'react-icons/fa';

const Featured = (props) => {
    const { image, name, price } = props;
    return (
        <div className='flex gap-4 mb-8'>
            <img className='w-1/2 ps-4 h-28' src={image} alt="" />
            <div>
                <p>{name}</p>
                <p>${price}</p>
                <div className='flex text-warning'>
                    <p><FaStar></FaStar></p>
                    <p><FaStar></FaStar></p>
                    <p><FaStar></FaStar></p>
                    <p><FaStar></FaStar></p>
                    <p><FaStar></FaStar></p>
                </div>
            </div>
        </div>
    );
};

export default Featured;