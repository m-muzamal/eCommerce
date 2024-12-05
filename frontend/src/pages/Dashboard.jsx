import React, { useEffect, useState } from "react";
import "../stylesheets/Dashboard.css";
import DashboardHeader from "../components/DashboardHeader";
import ProductList from "../components/ProductList";
import UsersList from "../components/UsersList";
import { getAllUsers } from "../utils/APIs";

const Dashboard = ({ accessToken }) => {
  const [activeBtn, setActiveBtn] = useState("All Products");
  const [users, setUsers] = useState(null);

  const handleSetActive = (btn) => {
    setActiveBtn(btn);
  };

  const fetchUsers = async () => {
    try {
      const getUsers = await getAllUsers(accessToken);
      setUsers(getUsers?.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [accessToken]);

  console.log("users:", users)
  return (
    <section className="dashboard">
      <div className="container dashboard_container">
        <DashboardHeader
          activeBtn={activeBtn}
          handleSetActive={handleSetActive}
        />
        {activeBtn === "All Products" ? <ProductList /> : <UsersList users={users} />}
      </div>
    </section>
  );
};

export default Dashboard;
