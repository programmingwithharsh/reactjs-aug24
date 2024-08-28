import Product from './Product';

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
                        <Product key={index} product={product} />
                    ))
                }


            </tbody >
        </table >
    </>
}