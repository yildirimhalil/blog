import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "articles",
        element: <Articles />,
      },
      {
        path: "articles/:id",
        element: <ArticleDetail />,
      },
    ],
  },
]);
