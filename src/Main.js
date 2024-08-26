import React from 'react';
import AddProduct from './AddProduct';
import Welcome from './Welcome';
import ProductList from './ProductList';
import Star from './Star';
import Product from './Product';
import Title from './Title';

export default class Main extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <div>This is Main Class Component
            <AddProduct />
            <Welcome />
            <ProductList />
            <Star />
            <Product />
            <Title />
        </div>
    }
}