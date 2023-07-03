import { useEffect, useState } from "react";
import AllToyCard from "./AllToyCard";

const AllToys = () => {
    const [allToys, setAllToys] = useState([]);

    useEffect(() => {
        fetch('myToys.json')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])


    return (
        <div className="mt-8">
            <div className="text-center">
                <h2 className="text-5xl font-bold text-orange-500">Here all of our toys!</h2>
                <p>Our toy shops often stock toys that promote learning and development <br />in areas such as STEM (Science, Technology, Engineering, Mathematics), creativity, language skills, and problem-solving.</p>
            </div>
            <div className="grid grid-clos-1 md:grid-clos-2 lg:grid-cols-3 gap-6">
                {
                    allToys.map(allToy => <AllToyCard
                        key={allToy._id}
                        allToy={allToy}
                    ></AllToyCard>)
                }
            </div>
        </div>
    );
};

export default AllToys;