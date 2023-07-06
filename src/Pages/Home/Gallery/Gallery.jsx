import React from 'react';

const Gallery = () => {
    return (
        <div className='bg-teal-400 p-4 mt-8 rounded-xl'>

            <h3 className='text-center text-5xl text-pink-500 font-bold mb-8 '>My Gallery</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  '>
                <img className='h-44 w-full rounded-2xl' src="https://i.ibb.co/fvQpKpw/gal-9.png" alt="" />
                <img className='h-44 w-full rounded-2xl' src="https://i.ibb.co/sWmxCjw/gal-4.png" alt="" />
                <img className='h-44 w-full rounded-2xl' src="https://i.ibb.co/VCTBt4J/gal-5.png" alt="" />
                <img className='h-44 w-full rounded-2xl' src="https://i.ibb.co/crZwsKM/gal-6.png" alt="" />
                <img className='h-44 w-full rounded-2xl' src="https://i.ibb.co/jGqf8Q7/gal-7.png" alt="" />
                <img className='h-44 w-full rounded-2xl' src="https://i.ibb.co/C202DRK/gal-8.png" alt="" />
                <img className='h-44 w-full rounded-2xl' src="https://i.ibb.co/sbx5DxH/gal-10.png" alt="" />
                <img className='h-44 w-full rounded-2xl' src="https://i.ibb.co/HVXMqvK/gal-12.png" alt="" />
            </div>
        </div>
    );
};

export default Gallery;