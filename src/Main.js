import React from 'react';
import AddProduct from './AddProduct';
import Welcome from './Welcome';
import ProductList from './ProductList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import About from './About';
import UsersList from './UserList';
import Customer from './Customer';
import Login from './Login';
import ProductDetail from './ProductDetail';
import NotFound from './NotFound';

export default class Main extends React.Component { // Inheritance
    constructor(props) { // lifecycle
        super(props); // always needed, ES6 Feature
        console.log("Constructor Lifecyle - 1");
        this.state = {
            username: "Kunal",
            elements: ["Hydrogen", "Helium", "Lithium", "Beryllium", "Boron"],
            products: [
                {
                    "productId": 1,
                    "productName": "Leaf Rake - json",
                    "productCode": "GDN-0011",
                    "releaseDate": "March 19, 2016",
                    "description": "Leaf rake with 48-inch wooden handle.",
                    "price": 19.95,
                    "starRating": 3.2,
                    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
                },
                {
                    "productId": 2,
                    "productName": "Garden Cart",
                    "productCode": "GDN-0023",
                    "releaseDate": "March 18, 2016",
                    "description": "15 gallon capacity rolling garden cart",
                    "price": 32.99,
                    "starRating": 4.2,
                    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
                },
                {
                    "productId": 3,
                    "productName": "Hammer",
                    "productCode": "TBX-0048",
                    "releaseDate": "May 21, 2016",
                    "description": "Curved claw steel hammer",
                    "price": 8.9,
                    "starRating": 4.8,
                    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
                },
                {
                    "productId": 4,
                    "productName": "Saw",
                    "productCode": "TBX-0022",
                    "releaseDate": "May 15, 2016",
                    "description": "15-inch steel blade hand saw",
                    "price": 11.55,
                    "starRating": 3.7,
                    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
                },
                {
                    "productId": 5,
                    "productName": "Video Game Controller",
                    "productCode": "GMG-0042",
                    "releaseDate": "October 15, 2015",
                    "description": "Standard two-button video game controller",
                    "price": 35.95,
                    "starRating": 4.6,
                    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
                }
            ]
        }
        console.log("Main Component Props is", this.props);
    }

    addProduct = (productSubmitted) => {
        debugger
        this.setState((state) => ({ // whenever state udpate, component rerender
            products: state.products.concat([productSubmitted])
        }))
    }

    render() { // lifecycle
        console.log("Render Lifecyle - 2");
        console.log("Main Component State is ", this.state);
        return <BrowserRouter>
            <Routes>
                <Route path='/' element={<Nav />}>
                    <Route index element={<Welcome usernameProps={this.props.usernameProps} />} />
                    <Route path="/products" element={<ProductList products={this.state.products} />} />
                    <Route path="/products/:id" element={<ProductDetail />} />
                    <Route path="/addproduct" element={<AddProduct onAddProduct={(addedProduct) => this.addProduct(addedProduct)} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/users" element={<UsersList />} />
                    <Route path="/customers" element={<Customer />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    }
}