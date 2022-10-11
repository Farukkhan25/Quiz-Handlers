import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage";
import Topics from "./Components/Topics";
import Root from "./Components/Root";
import Questions from "./Components/Questions";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
    children: [
      {
        path: "/",
        element: <Topics />,
      },
      {
        path: "/Topics",
        element: <Topics />,
      },
      {
        path: "/topic/:topicId",
        loader: async ({ params }) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`);
        },
      element: <Questions />
      },
    ],
  },
]);