import { createBrowserRouter } from "react-router-dom";
import Home from "../../component/Home/Home";
import Info from "../../component/Info/Info";
import Login from "../../component/Login/Login";
import Man from "../../component/Man/Man";
import Register from "../../component/Register/Register";
import Main from "../../layout/Main";
import Privateroute from "../Privateroute/Privateroute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      {
        path: "/man",
        element: (
          <Privateroute>
            <Man></Man>
          </Privateroute>
        ),
        loader: () => fetch("http://localhost:5000/man-categories"),
      },
      {
        path: "/man/info/:id",
        element: <Info></Info>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/sigleman/${params.id}`),
      },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
    ],
  },
]);
