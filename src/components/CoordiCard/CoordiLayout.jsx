import React from "react";
import DisplayCoordi from "./DisplayCoordi";
import { members } from "../../constants";
import "./coordi.css";

const CoordiLayout = () => {
  const firstSection = members.slice(0, 4);
  const remainingSection = members.slice(4);

  return (
    <div className="page-wrapper">
      <h1 className="tag-name lead" style={{ paddingBottom: 50 }}> LEAD CO-ORDINATORS </h1>
      <div className="grid grid-two">
        {firstSection.map((item) => (
          <DisplayCoordi
            key={item.id}
            name={item.name}
            position={item.position}
            image={item.image}
          />
        ))}
      </div>
      <h1 className="tag-name" style={{ paddingTop: 50 }}>
        SENIOR AND JUNIOR CO-ORDINATORS
      </h1>
      <div className="grid grid-three">
        {remainingSection.map((item) => (
          <DisplayCoordi
            key={item.id}
            name={item.name}
            position={item.position}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CoordiLayout;
