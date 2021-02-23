import React from "react";
import { useSelector } from "react-redux";
import ProductDetails from "./ProductDetails";
import "./ProductList.css"

function ProductList() {
    const products = useSelector(st => st.products);

    return (
        <div className="container">
            <h1 className="ProductList-title m-5">Welcome to Shoply!</h1>
            <div className="row">
                { Object.keys(products).map(id => (
                    <ProductDetails 
                        key={id}
                        id={id}
                        name={products[id].name} 
                        image_url={products[id].image_url}
                        price={products[id].price}
                        description={products[id].description}
                    />
                )) }
            </div>
        </div>
    );
}

export default ProductList;