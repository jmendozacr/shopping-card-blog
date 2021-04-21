import React from 'react';
import Products from '../components/Products';

const Shopping = ({ products }) => {
    return (
        <div>
            <h1>Shopping</h1>
            <Products products={products}/>
        </div>
    );
}

export default Shopping;
