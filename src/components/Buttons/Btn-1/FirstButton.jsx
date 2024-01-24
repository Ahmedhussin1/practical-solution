import React from "react";
import './FirstButton.scss'
const FirstButton = ({ title, link }) => {
  return (
    <div className="btn btn-first">
      <span>
        <a href={link}>{title}</a>
      </span>
    </div>
  );
};
export default FirstButton;
