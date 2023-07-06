import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';


const AddToy = () => {

    const { user } = useContext(AuthContext);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])


    const handleAddToy = (event) => {
        event.preventDefault();
        const form = event.target;
        // const email = user?.email;
        const name = form.name.value;
        const seller_email = form.seller_email.value;
        const seller_name = form.seller_name.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const available_quantity = form.available_quantity.value;
        const details = form.details.value;

        const addToy = {
            photo,
            name: name,
            seller_name,
            seller_email,
            price,
            rating,
            available_quantity,
            details,

        }

        fetch('http://localhost:5000/myToys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Toy added successfully')
                }
            })

    }
    return (
        <div className='card-body'>
            <h3 className="text-center text-3xl font-bold mb-4">Insert Your toy details</h3>
            <form onSubmit={handleAddToy} >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="form-control">
                        <input type="text" name='name' placeholder='Name' className='input input-bordered' />
                    </div>
                    <div className="form-control">
                        <input className='input input-bordered' type="text" placeholder='Seller Name' name='seller_name' />
                    </div>
                    <div className="form-control">
                        <input className='input input-bordered' type="text" defaultValue={user?.email} disabled name='seller_email' />
                    </div>
                    <div className="form-control">
                        <input className='input input-bordered' type="text" placeholder='Price' name='price' />
                    </div>
                    <div className="form-control">
                        <input className='input input-bordered' type="text" placeholder='Rating' name='rating' />
                    </div>
                    <div className="form-control">
                        <input className='input input-bordered' type="img" placeholder='Photo_URL' name='photo' />
                    </div>
                    <div className="form-control">
                        <input className='input input-bordered' type="text" placeholder='Available Quantity' name='available_quantity' />
                    </div>
                    <select className='input input-bordered' name="category_id" id="">{categories.map(cat => <option key={cat._id} value={cat._id}>{cat.name}</option>)}</select>
                    <textarea className='input input-bordered' type="text" placeholder='Details' name='details' />
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Add Your Toys" />
                </div>
            </form>
        </div>
    );
};

export default AddToy;