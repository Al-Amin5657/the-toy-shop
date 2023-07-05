
const AllMyToysCard = ({ allToy }) => {
    const { seller, name, subCategory, quantity, price } = allToy;
    return (

        <tr>
            <th>1</th>
            <td>{seller}</td>
            <td>{name}</td>
            <td>{subCategory}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>View Detail</td>
        </tr>

    );
};

export default AllMyToysCard;