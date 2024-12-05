import React, { useEffect, useState } from "react";
import "../stylesheets/Dashboard.css";
import DashboardHeader from "../components/DashboardHeader";
import ProductList from "../components/ProductList";
import UsersList from "../components/UsersList";
import { getAllUsers } from "../utils/APIs";
import { useDispatch } from "react-redux";
import { setAllUsers } from "../redux/User/userSlice";

const Dashboard = ({ accessToken }) => {
  const [activeBtn, setActiveBtn] = useState("All Products");
  const dispatch = useDispatch();

  const handleSetActive = (btn) => {
    setActiveBtn(btn);
  };

  const fetchUsers = async () => {
    try {
      const getUsers = await getAllUsers(accessToken);
      dispatch(setAllUsers(getUsers.users));
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [accessToken]);

  return (
    <section className="dashboard">
      <div className="container dashboard_container">
        <DashboardHeader
          activeBtn={activeBtn}
          handleSetActive={handleSetActive}
        />
        {activeBtn === "All Products" ? (
          <ProductList />
        ) : (
          <UsersList accessToken={accessToken} />
        )}
      </div>
    </section>
  );
};

export default Dashboard;
