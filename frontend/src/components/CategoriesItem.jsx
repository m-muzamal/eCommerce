import { Link } from "react-router-dom";
import { items } from "../data/AllData";
import { useState, useMemo } from "react";
import { Pagination } from "@mui/material";

function CategoriesItem({ category }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const filteredItems = useMemo(() => {
    if (category === "all") return items;
    return items.filter((item) => item.category === category);
  }, [category]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="proud-container">
        <div className="container">
          <div className="products-grid">
            {currentItems.map((item) => (
              <div key={item.id} className="product normal">
                <Link
                  onClick={() => window.scrollTo(0, 0)}
                  to={`/categories/product/${item.id}`}
                >
                  <div className="product-header">
                    <img src={item.img} alt="product1" />
                  </div>
                  <div className="product-details">
                    <p>{item.description}</p>
                    <p className="item-price">{item.price}$</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="pagination">
            <Pagination
              count={Math.ceil(filteredItems.length / itemsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesItem;
