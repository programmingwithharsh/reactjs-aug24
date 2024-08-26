import Star from "./Star";
export default function ProductList(props) {
    console.log("ProductList", props);
    return <><h1>Product List Component</h1>
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th><button className="btn btn-outline-primary">Show Image</button></th>
                    <th>Product Name</th>
                    <th>Product Code</th>
                    <th>Release Date</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>

                {
                    props.products.map((product, index) => (
                        <tr key={index}>
                            <td><img width="50" height="50" src={product.imageUrl} /></td>
                            <td>{product.productName}</td>
                            <td>{product.productCode}</td>
                            <td>{product.releaseDate}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.rating}<Star /></td>
                        </tr >
                    ))
                }


            </tbody >
        </table >
    </>
}