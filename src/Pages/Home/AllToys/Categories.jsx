import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Categories = () => {
    const [toyCategories, setToyCategories] = useState([])
    console.log(toyCategories);


    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setToyCategories(data))
            .catch(error => {
                console.error(error);
            })
    }, [])
    return (
        <div>
            <div className='text-center mt-16'>

                {
                    toyCategories.map(category => <a
                        key={category._id}

                    >
                        <Link to={`/category/${category._id}`} className="mr-12 bg-blue-500 p-4 text-white rounded-full font-bold" >{category.name}</Link>
                    </a>)
                }
            </div>
        </div>
    );
};

export default Categories;