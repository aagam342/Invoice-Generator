// App.js
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import Browse from "./Components/Browse";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Registration />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={appRouter} />;
}

export default App;
