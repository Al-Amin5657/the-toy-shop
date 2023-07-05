
const MyToysRow = ({ toy }) => {
    const { _id, picture, customerName, subCategory, seller, price, quantity, email } = toy;

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
                    }

                });
        }
    }
    return (


        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={picture} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customerName}</div>
                        <div className="text-sm opacity-50">{seller}</div>
                    </div>
                </div>
            </td>
            <td>
                <div>
                    {email}
                </div>
            </td>
            <td>
                <div>
                    {subCategory}
                </div>
            </td>
            <td>Price: &{price}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>

    );
};

export default MyToysRow;