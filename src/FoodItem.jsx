import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FoodItem.css'; // Import your custom CSS



export default function FoodItem({ name, desc, qnty, price, imgURL }) {
    return (

        <div className="card mb-3" style={{ width: '550px', backgroundColor: 'transparent', border: '1px solid rgb(231, 200, 145)' }}>
            <div className="row g-0">
                <div className="col-md-4 cardImg">
                    <img src={imgURL} className="img-fluid rounded-start" alt={name} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{desc}</p>
                        <p className="card-text">
                            <small className={qnty == 0 ? "redText" : "text-body-secondary"} style={{ fontWeight: 'bold' }}>
                                {qnty != 0 ? `Quantity Available: ${qnty}` : 'Out of Stock'}
                            </small>
                        </p>
                        <p className="card-text">
                            <small className="text-body-secondary">Rs. {price}</small>
                        </p>
                        <p className="card-text">
                            <button style={{ backgroundColor: qnty === 0 ? '#ccc' : '#cd9027', cursor: qnty === 0 ? 'not-allowed' : 'pointer' }} disabled={qnty === 0}>
                                Add to Cart</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}
