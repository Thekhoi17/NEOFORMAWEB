import React, { useState } from "react";
import { Link } from "react-router-dom"; 

const Product = () => {
    const product = {
        id: 1,
        name: 'Áo Sơ Mi',
        description: 'Mô tả cho áo sơ mi',
        price: 25.99,
        image: 'https://via.placeholder.com/300',
    };

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6">
                    <img src={product.image} className="img-fluid" alt={product.name} />
                </div>
                <div className="col-md-6">
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p><strong>Giá:</strong> ${product.price}</p>
                    <button className="btn btn-primary">Thêm vào Giỏ Hàng</button>
                </div>
            </div>
        </div>
    );
};

export default Product;