import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Ui/AppLayout";
import MainPage from "./Features/mainPage/MainPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [{ path: "/", element: <MainPage /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
