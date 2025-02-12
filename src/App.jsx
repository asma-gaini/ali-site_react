import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Ui/AppLayout";
import MainPage from "./Features/mainPage/MainPage";
import Comments from "./Features/comments/Comments";
import Communication from "./Features/communication/Communication";
import Portfolio from "./Features/portfolio/Portfolio";
import BuyPoducts from "./Features/buyPoducts/BuyPoducts";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [{ path: "/", element: <MainPage /> },
    { path: "/comments", element: <Comments /> },
    { path: "/contact", element: <Communication /> },
    { path: "/portfolio", element: <Portfolio /> },
    { path: "/shop", element: <BuyPoducts /> },],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
