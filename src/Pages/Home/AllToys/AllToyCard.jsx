
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const AllToyCard = ({ allToy }) => {
    const { user } = useContext(AuthContext);
    const { _id, picture, name, price, rating } = allToy;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mb-8">
            <figure className="px-10 pt-10">
                <img className='h-72 w-72 rounded-2xl' src={picture} />
            </figure>
            <div className="card-body text-center">
                <div className='flex gap-8'>
                    <div>
                        <h2 className="card-title">{name}</h2>
                        <Rating className='mb-2'
                            placeholderRating={rating}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        ></Rating>
                        <span>{rating}</span>
                    </div>
                    <p className='text-orange-500'>Price: $ {price}</p>

                </div>
                <div className="card-actions">
                    <Link to={`/addedToys/${_id}`} >
                        <button className="btn btn-info text-white">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllToyCard;