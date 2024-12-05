import React from "react";
import { items } from "../data/AllData";
import { Link } from "react-router-dom";
import { MdOutlineDeleteForever } from "react-icons/md";

const ProductList = () => {
  const handleDelet = () => {
    console.log("delet product");
  };

  return (
    <div className="content">
      <table>
        <thead>
          <tr className="item item_header">
            <th>No.</th>
            <th>Image</th>
            <th>Title</th>
            <th>Discription</th>
            <th>Category</th>
            <th>Price ($)</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td className="img">
                <img src={item.img} alt="image" />
              </td>
              <td>
                <Link
                  onClick={() => window.scrollTo(0, 0)}
                  to={`/categories/product/${item.id}`}
                  className="prod_name"
                >
                  {item.description}
                </Link>
              </td>
              <td>{item.specs.slice(0, 45)}...</td>
              <td>{item.category}</td>
              <td>{item.price}$</td>
              <td>
                <MdOutlineDeleteForever onClick={handleDelet} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
