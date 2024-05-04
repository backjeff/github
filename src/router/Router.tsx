import { Navigate, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./Router.types";
import Profile from "../pages/profile/Profile";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={ROUTES.profile} replace />,
  },
  {
    path: ROUTES.profile,
    element: <Profile />,
  },
]);

export default Router;
