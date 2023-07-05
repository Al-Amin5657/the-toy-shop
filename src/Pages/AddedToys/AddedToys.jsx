import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const AddedToys = () => {
    const addedToys = useLoaderData();
    const { user } = useContext(AuthContext);
    const { _id, name, sub_category, price, available_quantity, picture } = addedToys;

    const handleBuyToys = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email;
        const date = form.date.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const addedToy = {
            name: name,
            email,
            date,
            picture,
            subCategory,
            quantity,
            category_id: _id,
            price: price
        }
        console.log(addedToy);

        fetch('http://localhost:5000/myToys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedToy)
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
        <div className="card-body">
            <h3 className="text-center text-3xl font-bold mb-4">Toy Name: {name}</h3>
            <form onSubmit={handleBuyToys}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="form-control">
                        <input type="text" name="name" defaultValue={name} placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="date" name="date" placeholder="Date" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <input type="text" name="subCategory" defaultValue={sub_category} placeholder="sub-category" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" name="price" defaultValue={'$' + price} placeholder="Due Amount" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <input type="text" name="quantity" defaultValue={available_quantity} placeholder="available_quantity" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" name="email" defaultValue={user?.email} placeholder="available_quantity" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Add Your Toys" />
                </div>
            </form>
        </div>
    );
};

export default AddedToys;