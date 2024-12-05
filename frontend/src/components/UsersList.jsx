import React from "react";
import { items } from "../data/AllData";
import { MdOutlineDeleteForever } from "react-icons/md";

const UsersList = () => {
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
            <th>Is Admin</th>
            <th className="lastTitle">Delete</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id}>
              <td className="row">{index + 1}</td>
              <td className="row">Muhammad Muzammal </td>
              <td className="row">{item.specs.slice(0, 45)}...</td>
              <td className="row">{item.category}</td>
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
