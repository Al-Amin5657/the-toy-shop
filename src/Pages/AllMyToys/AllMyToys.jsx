import { useEffect, useState } from "react";
import AllMyToysCard from "./AllMyToysCard";

const AllMyToys = () => {
    const [allToys, setAllToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/myToys')
            .then(res => res.json())
            .then(data => setAllToys(data));
    }, [])
    return (
        <div>
            <h3>All Toys: {allToys.length}</h3>
            <div className="overflow-x-auto mb-8">
                <table className="table table-xs">
                    <thead>
                        <tr className="bg bg-info">
                            <th></th>
                            <th>Seller</th>
                            <th>Name</th>
                            <th>Sub-Category</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allToys.map(allToy => <AllMyToysCard
                                key={allToy._id}
                                allToy={allToy}
                            ></AllMyToysCard>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllMyToys;