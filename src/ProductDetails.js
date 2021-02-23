import React from "react";
import CartButtons from "./CartButtons";
import "./ProductDetails.css";

function ProductDetails({id, name, image_url, price, description}) {
  return (
    <div className="col-4">
        <div className="ProductDetails-card card m-4 border">
            <img
                className="ProductDetails-img card-img-top"
                src={image_url}
                alt={name}
            />

            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">${price} <br /> {description}</p>
                <CartButtons id={id} />
            </div>
        </div>
    </div>
  );
}

export default ProductDetails;