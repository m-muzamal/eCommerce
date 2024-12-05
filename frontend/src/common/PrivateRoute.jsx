import { Navigate } from "react-router-dom";

function PrivateRoute({ children, accessToken, isAdmin }) {
  if (!accessToken || !isAdmin) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default PrivateRoute;
