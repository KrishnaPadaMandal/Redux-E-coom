import React from 'react';
import './NoProduct.css'; 

const NoProduct = () => {
  return (
    <div className="no-product-container">
      <div className="pizza-animation">
        <div className="pizza"></div>
        <div className="smoke"></div>
        <div className="smoke"></div>
        <div className="smoke"></div>
      </div>
      <div className="no-product-message">No Pizzas Found</div>
      {/* <div className="no-product-subtext">Try searching again or check back later.</div> */}
      <a href="#" className="cta-button">Go Back</a>
    </div>
  );
};

export default NoProduct;
