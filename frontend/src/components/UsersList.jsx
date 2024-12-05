import React from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { Switch } from "@mui/material";
import { updateUser } from "../utils/APIs";
import { useDispatch, useSelector } from "react-redux";
import { updateUserInStore } from "../redux/User/userSlice";

const UsersList = ({ accessToken }) => {
  const { allUsers: users } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const handleDelet = () => {
    console.log("delet user");
  };

  const handleChange = async (id, isAdmin) => {
    try {
      const updatedUser = await updateUser(id, isAdmin, accessToken);
      dispatch(updateUserInStore({ id, isAdmin }));
    } catch (error) {
      console.error("Error updating error:", error);
    }
  };

  console.log("Stored users:", users);
  return (
    <div className="content">
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Registered At</th>
            <th>Admin</th>
            <th className="lastTitle">Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td className="row">{index + 1}</td>
              <td className="row">{user.name}</td>
              <td className="row">{user.email}</td>
              <td className="row">{formatDate(user.createdAt)}</td>
              <td className="row">
                <Switch
                  checked={user.isAdmin}
                  onChange={(e) => handleChange(user._id, e.target.checked)}
                />
              </td>
              <td className="last">
                <MdOutlineDeleteForever onClick={handleDelet} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
