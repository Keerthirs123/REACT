import { createBrowserRouter } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Welcome from "./Welcome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/welcome",
    element: <Welcome />,
  },
]);

export default router;
