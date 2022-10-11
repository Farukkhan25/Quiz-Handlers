import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage";
import Topics from "./Components/Topics";
import Root from "./Components/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Topics />,
      },
    ],
  },
]);