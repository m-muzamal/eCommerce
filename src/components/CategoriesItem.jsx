import { Link } from "react-router-dom";
import { items } from "../data/AllData";
import { useMemo } from "react";

function CategoriesItem({ category }) {
  const filteredItems = useMemo(() => {
    if (category === "all") return items;
    return items.filter((item) => item.category === category);
  }, [category]);

  return (
    <>
      <div className="proud-container">
        <div className="container">
          <div className="products-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="product normal">
                <Link
                  onClick={() => window.top(0, 0)}
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
        </div>
      </div>
    </>
  );
}

export default CategoriesItem;
