import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import MyToysRow from './MyToysRow';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);


    const url = `http://localhost:5000/myToys?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data));
    }, [url]);

    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete?');
        if (proceed) {
            fetch(`http://localhost:5000/myToys/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted Successful');
                        const remaining = myToys.filter(myToy => myToy._id !== id);
                        setMyToys(remaining);
                    }

                });
        }
    }

    const handleApprove = id => {
        fetch(`http://localhost:5000/myToys/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approve' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update
                    const remaining = myToys.filter(myToy => myToy._id !== id);
                    const updated = myToys.find(myToy => myToy._id === id);
                    updated.status = 'Approved';
                    const newToy = [updated, ...remaining];
                    setMyToys(newToy);
                }
            })
    }



    return (
        <div>
            <h2>Your Toys: {myToys.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Email</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map(toy => <MyToysRow
                                key={toy._id}
                                toy={toy}
                                handleDelete={handleDelete}
                                handleApprove={handleApprove}
                            ></MyToysRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;