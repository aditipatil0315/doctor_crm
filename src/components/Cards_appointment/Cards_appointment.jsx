
import React from 'react';
import './Cards_appointment.css';




const Cards_appointment= ({ data }) => {
  return (
    <div className="card-container">
      {data.map((item, index) => (
        <div className="card_app" key={index}>
          <h2 className="card-title_app">{item.title}</h2>
          <p className="card-value_app">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards_appointment;