import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaStar, } from 'react-icons/fa';



const AddedToys = () => {
    const toyDetail = useLoaderData();
    const { user } = useContext(AuthContext);
    const { name, sub_category, price, available_quantity, picture, details, rating } = toyDetail;


    return (
        <div className='grid grid-cols-3 mb-8'>
            <div className='bg-teal-200'>
                <h2 className='text-4xl p-3'>Our Toy Category</h2>
                <hr />
                <ul className='ps-6 text-1xl'>
                    <li>Physics Toy</li>
                    <li>Biology Toy</li>
                    <li>Chemistry Toy</li>
                    <li>Engineering Toy</li>
                    <li>Mathematics Toy</li>
                </ul>
                <h2 className='text-3xl mb-5 p-3'>Feature Products</h2>
                <div className='flex gap-4 mb-8'>
                    <img className='w-1/2 ps-4' src="https://upload.wikimedia.org/wikipedia/commons/3/32/Lego_Color_Bricks.jpg" alt="" />
                    <div>
                        <p>Building Block</p>
                        <p>$25.35</p>
                        <div className='flex text-warning'>
                            <p><FaStar></FaStar></p>
                            <p><FaStar></FaStar></p>
                            <p><FaStar></FaStar></p>
                            <p><FaStar></FaStar></p>
                            <p><FaStar></FaStar></p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-4 mb-8'>
                    <img className='w-1/2 ps-4' src="https://i.ibb.co/S0G19Zg/education-1.jpg" alt="" />
                    <div>
                        <p>Engadget</p>
                        <p>$29.35</p>
                        <div className='flex text-warning'>
                            <p><FaStar></FaStar></p>
                            <p><FaStar></FaStar></p>
                            <p><FaStar></FaStar></p>
                            <p><FaStar></FaStar></p>
                            <p><FaStar></FaStar></p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <img className='w-1/2 h-32 ps-4' src="https://i.ibb.co/9yqjrBb/edu-4.jpg" alt="" />
                    <div>
                        <p>Number Cognition</p>
                        <p>$24.35</p>
                        <div className='flex text-warning'>
                            <p><FaStar></FaStar></p>
                            <p><FaStar></FaStar></p>
                            <p><FaStar></FaStar></p>
                            <p><FaStar></FaStar></p>
                            <p><FaStar></FaStar></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='col-span-2 ms-6'>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img className='w-full' src={picture} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-4xl text-info">{name}</h2>
                        <div className='flex justify-between'>
                            <div>
                                <p className='text-2xl'>{sub_category}</p>
                                <p>{rating}</p>
                            </div>
                            <div>
                                <p><span className='text-warning text-2xl'>Price:</span> ${price}</p>
                            </div>
                            <div>
                                <p><span className='text-warning text-2xl'>Quantity:</span> {available_quantity}</p>
                            </div>
                        </div>
                        <p>{details}</p>
                        <div className="card-actions">
                            <button className="btn btn-info text-white font-bold mt-6">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddedToys;