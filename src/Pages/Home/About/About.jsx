import React from 'react';
import img1 from '../../../assets/images/about-0.jpg'
import img2 from '../../../assets/images/about-1.jpg'
import img3 from '../../../assets/images/about-2.jpg'
import img4 from '../../../assets/images/about-3.jpg'
import img5 from '../../../assets/images/about-4.jpg'

const About = () => {
    return (
        <div className='mt-12'>
            <h5 className='text-center text-2xl font-semibold'>ABOUT US</h5>
            <h2 className='text-center text-5xl font-bold mb-10'>We make your children happier <br />
                with the best toys</h2>
            <div className='flex gap-8 m-5'>
                <div className='relative '>
                    <img className='h-full rounded-2xl' src={img1} alt="" />
                    <button className=" absolute top-3/4 ms-5 text-4xl btn btn-error text-white">Buy Now</button>
                </div>
                <div className='grid grid-cols-2 gap-8 text-white font-medium text-3xl '>
                    <div className='relative'>
                        <img className='rounded-2xl' src={img2} alt="" />
                        <p className='absolute ps-5 top-2/3'>Electronic</p>
                    </div>
                    <div className='relative'>
                        <img className='rounded-2xl' src={img3} alt="" />
                        <p className='absolute ps-5 top-2/3'>Learning</p>
                    </div>
                    <div className='relative'>
                        <img className='rounded-2xl' src={img4} alt="" />
                        <p className='absolute ps-5 top-2/3'>Musical</p>
                    </div>
                    <div className='relative'>
                        <img className='rounded-2xl' src={img5} alt="" />
                        <p className='absolute ps-5 top-2/3'>Physics</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;