import "../stylesheets/ProudProducts.css";
import CategoriesHeader from "../components/CategoriesHeader";
import { useParams } from "react-router";
import CategoriesItem from "../components/CategoriesItem";
import Newsletter from "../components/Newsletter";

function Categories() {
  const { category } = useParams();

  return (
    <>
      <CategoriesHeader />
      <CategoriesItem category={category} />
      <Newsletter />
    </>
  );
}

export default Categories;
