import { Link } from 'react-router-dom';
import Star from "./Star";

export default function Product(props) {
    let product = props.product;
    return <tr>
        <td><img width="50" height="50" src={product.imageUrl} /></td>
        <td><Link to={`/products/${product.productId}`}>{product.productName}</Link></td>
        <td>{product.productCode}</td>
        <td>{product.releaseDate}</td>
        <td>{product.description}</td>
        <td>{product.price}</td>
        <td>{product.rating}<Star /></td>
    </tr >
}