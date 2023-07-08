
const AllMyToysCard = ({ allToy }) => {
    const { seller_name, name, categoryName, available_quantity, price } = allToy;
    return (

        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>{seller_name}</td>
            <td>{name}</td>
            <td>{categoryName}</td>
            <td>{available_quantity}</td>
            <td>{price}</td>
            <td>View Detail</td>
        </tr>

    );
};

export default AllMyToysCard;