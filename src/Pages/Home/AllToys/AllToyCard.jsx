import React from 'react';

const AllToyCard = ({ allToy }) => {
    const { picture, name, price, rating } = allToy;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img className='h-72 w-72 rounded-2xl' src={picture} />
            </figure>
            <div className="card-body text-center">
                <div className='flex gap-8'>
                    <div>
                        <h2 className="card-title">{name}</h2>
                        <p>{rating}</p>
                    </div>
                    <p className='text-orange-500'>Price: $ {price}</p>

                </div>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default AllToyCard;