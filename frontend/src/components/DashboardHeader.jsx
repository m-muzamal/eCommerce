import React from "react";

const DashboardHeader = ({ activeBtn, handleSetActive }) => {
  return (
    <div className="dash_header">
      <h1 className="title">{activeBtn}</h1>
      <ul>
        <li>Add Product</li>
        <li
          className={activeBtn === "All Products" ? "active" : ""}
          onClick={() => handleSetActive("All Products")}
        >
          All Products
        </li>
        <li
          className={activeBtn === "All Users" ? "active" : ""}
          onClick={() => handleSetActive("All Users")}
        >
          Users
        </li>
      </ul>
    </div>
  );
};

export default DashboardHeader;
