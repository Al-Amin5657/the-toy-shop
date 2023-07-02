import React from 'react';
import image1 from '../../../assets/child-1.jpg'
import image2 from '../../../assets/child-2.jpg'
import image3 from '../../../assets/child-3.jpg'
import image4 from '../../../assets/child-4.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[500px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={image1} className='w-full rounded-xl' />
                <div className="absolute flex justify-center items-center rounded-xl h-full left-0 right-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white space-y-5 top-1/4'>
                        <h5 className='text-1xl text-center '>BEST TOYS EVER</h5>
                        <h2 className='text-7xl text-center  font-bold'>We make your children <br /> happier with the best toys</h2>
                        <p className='text-center '>We offer premium products,whether you are shopping <br /> at one of our actual stores or via our website!</p>
                        <div className=' flex justify-center'>
                            <button className="btn btn-info w-36 rounded-full ">Discover</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={image2} className='w-full rounded-xl' />
                <div className="absolute flex justify-center items-center rounded-xl h-full left-0 right-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white space-y-5 top-1/4'>
                        <h5 className='text-1xl text-center '>BEST TOYS EVER</h5>
                        <h2 className='text-7xl text-center  font-bold'>We make your children <br /> happier with the best toys</h2>
                        <p className='text-center'>We offer premium products,whether you are shopping <br /> at one of our actual stores or via our website!</p>
                        <div className=' flex justify-center'>
                            <button className="btn btn-info w-36 rounded-full">Discover</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={image3} className='w-full rounded-xl' />
                <div className="absolute flex justify-center items-center rounded-xl h-full left-0 right-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white space-y-5 top-1/4'>
                        <h5 className='text-1xl text-center '>BEST TOYS EVER</h5>
                        <h2 className='text-7xl text-center  font-bold'>We make your children <br /> happier with the best toys</h2>
                        <p className='text-center'>We offer premium products,whether you are shopping <br /> at one of our actual stores or via our website!</p>
                        <div className=' flex justify-center'>
                            <button className="btn btn-info w-36 rounded-full">Discover</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={image4} className='w-full rounded-xl' />
                <div className="absolute flex justify-center items-center rounded-xl h-full left-0 right-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white space-y-5 top-1/4'>
                        <h5 className='text-1xl text-center '>BEST TOYS EVER</h5>
                        <h2 className='text-7xl text-center  font-bold'>We make your children <br /> happier with the best toys</h2>
                        <p className='text-center'>We offer premium products,whether you are shopping <br /> at one of our actual stores or via our website!</p>
                        <div className=' flex justify-center'>
                            <button className="btn btn-info w-36 rounded-full">Discover</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;