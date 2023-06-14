import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
  {
    element: <div>Page 1</div>,
    path: "/",
  },
]);

export const Router = () => {
  return <RouterProvider router={routes} />;
};
