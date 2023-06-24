import React from "react";
import "./ListBox.css";

const ListBox = (items, activeIndex) => {
  console.log("activeIndex----------", activeIndex);
  return (
    <ul className="listBoxContainer">
      {items.map((item, index) => (
        <li
          className={`listBoxItem ${index === activeIndex ? "activeItem" : ""}`}
          key={index}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default ListBox;
