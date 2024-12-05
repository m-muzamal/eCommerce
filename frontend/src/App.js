import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import ProductPage from "./pages/ProductPage";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./common/PrivateRoute";
import { useSelector } from "react-redux";

function App() {
  const { accessToken, user } = useSelector((state) => state.user);
  const isAdmin = accessToken && user?.user.isAdmin;

  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="categories/:category" element={<Categories />} />
        <Route path="categories/product/:id" element={<ProductPage />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute accessToken={accessToken} isAdmin={isAdmin}>
              <Dashboard accessToken={accessToken} />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
