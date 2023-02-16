import React from "react";
import Button from "./Button";

const Header = ({ title, onToggle, showAddClose }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAddClose ? "red" : "green"}
        text={showAddClose ? "Close" : "Add"}
        onClick={onToggle}
      />
    </header>
  );
};

export default Header;
