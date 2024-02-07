import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/Home";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
];
const router = createBrowserRouter(routes);

export default function Router() {
  return <RouterProvider router={router} />;
}
