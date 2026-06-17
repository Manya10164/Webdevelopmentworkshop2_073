// App.js

import React from "react";


function ProductCard({ name, price, category, bgColor, borderColor, textColor }) {
  return (
    <div
      className="card"
      style={{
        backgroundColor: bgColor,
        border: `4px solid ${borderColor}`,
        color: textColor,
      }}
    >
      <h2>{name}</h2>
      <p>
        <b>Price:</b> ₹{price}
      </p>
      <p>
        <b>Category:</b> {category}
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <h1>Product Showcase</h1>

      <div className="top-row">
        <ProductCard
          name="Wireless Mouse"
          price="799"
          category="Electronics"
          bgColor="#b9dff1"
          borderColor="blue"
          textColor="darkblue"
        />

        <ProductCard
          name="Running Shoes"
          price="2499"
          category="Footwear"
          bgColor="#98f28d"
          borderColor="green"
          textColor="darkgreen"
        />
      </div>

      <div className="bottom-row">
        <ProductCard
          name="Smart Watch"
          price="3999"
          category="Gadgets"
          bgColor="#f8b6c0"
          borderColor="red"
          textColor="darkred"
        />
      </div>
    </div>
  );
}

export default App;