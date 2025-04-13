import React from 'react';
import './Cards_dashboard.css';




const Cards_dashboard = ({ data }) => {
  return (
    <div className="card-container">
      {data.map((item, index) => (
        <div className="card" key={index}>
          <h2 className="card-title">{item.title}</h2>
          <p className="card-value">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards_dashboard;
