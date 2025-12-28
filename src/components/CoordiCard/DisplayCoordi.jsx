import React from "react";
import template from "../../assets/coordi/template_new.png";

const DisplayCoordi = ({ name, position, image }) => {
  return (
    <div className="card" style={{ backgroundImage: `url(${template})` }}>
      <div className="photo-placeholder">
        <img src={image} alt={name} className="card-photo" />
      </div>

      <div className="card-text-block">
        <div className="card-name">{name}</div>
        <div className="card-role">{position}</div>
      </div>
    </div>
  );
};

export default DisplayCoordi;
