import React from 'react';
import { Navigate } from 'react-router-dom';

export default class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
        console.log("AddProduct constructor");
        console.log(this.props);
    }

    goToProducts = () => {
        this.setState({ // update state, whenever state updates component rerender
            redirect: true
        })
    }

    componentWillUnmount() {
        console.log("AddProduct componentWillUnmount");
    }

    handleSubmit = (event) => {
        event.preventDefault(); // stop page refresh

        const productName = event.target.elements.productName.value;
        const imageUrl = event.target.elements.imageUrl.value;
        const productCode = event.target.elements.productCode.value;
        const releaseDate = event.target.elements.releaseDate.value;
        const description = event.target.elements.description.value;
        const price = event.target.elements.price.value;
        const starRating = event.target.elements.starRating.value;

        const product = {
            productName,
            imageUrl,
            productCode,
            releaseDate,
            description,
            price,
            starRating
        }

        this.props.onAddProduct(product);

        if (productName == "") {
            alert("Enter Product Name");
        }
        else {
            this.goToProducts();
        }
    }

    render() {
        console.log("render");
        const { redirect } = this.state;
        return <>
            {
                redirect && (
                    <Navigate to="/products" />
                )
            }
            <h1>Add Product Work!</h1>
            <button className='btn btn-primary' onClick={this.goToProducts}>Go to Products</button>

            <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-4'>
                <form onSubmit={this.handleSubmit}>
                    Product Name <input className='form-control' placeholder='Enter Product Name' type="text" name="productName" />
                    Image Url <input className='form-control' placeholder='Enter Image Url' type="text" name="imageUrl" />
                    Product Code <input className='form-control' placeholder='Enter Product Code' type="text" name="productCode" />
                    Date <input className='form-control' placeholder='Enter Date' type="date" name="releaseDate" />
                    Description <input className='form-control' placeholder='Enter description' type="text" name="description" />
                    Price <input className='form-control' placeholder='Enter Price' type="text" name="price" />
                    Rating <input className='form-control' placeholder='Enter Rating' type="text" name="starRating" />
                    <button className='btn btn-primary mt-2'>Add Product</button>
                </form>
            </div>

        </>
    }
}