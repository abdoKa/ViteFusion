import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/error/ErrorPage";
import HomePage from "./pages/home/HomePage";
import BaseLayout from "./pages/layouts/BaseLayout";
import Rating from "./components/Rating";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/rating", element: <Rating /> },
    ],
  },
]);

export default router;
