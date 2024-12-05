import React from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { Switch } from "@mui/material";

const UsersList = ({ users }) => {
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

  return (
    <div className="content">
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Registered At</th>
            <th>Is Admin</th>
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
                <Switch />
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
