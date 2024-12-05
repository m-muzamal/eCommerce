import React, { useState } from "react";
import "../stylesheets/Dashboard.css";
import DashboardHeader from "../components/DashboardHeader";
import ProductList from "../components/ProductList";
import UsersList from "../components/UsersList";

const Dashboard = () => {
  const [activeBtn, setActiveBtn] = useState("All Products");

  const handleSetActive = (btn) => {
    setActiveBtn(btn);
  };

  return (
    <section className="dashboard">
      <div className="container dashboard_container">
        <DashboardHeader
          activeBtn={activeBtn}
          handleSetActive={handleSetActive}
        />
        {activeBtn === "All Products" ? <ProductList /> : <UsersList />}
      </div>
    </section>
  );
};

export default Dashboard;
