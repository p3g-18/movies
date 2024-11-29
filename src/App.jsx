import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Lazy load the components
const Login = React.lazy(() => import("./Components/Login"));
const Browse = React.lazy(() => import("./Components/Browse"));
const Description = React.lazy(() => import("./Components/Description"));

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<div>Loading Login...</div>}>
          <Login />
        </Suspense>
      ),
    },
    {
      path: "/browse",
      element: (
        <Suspense fallback={<div>Loading Browse...</div>}>
          <Browse />
        </Suspense>
      ),
    },
    {
      path: "/MovieDetails/:id", // Setting up the route dynamically
      element: (
        <Suspense fallback={<div>Loading Movie Details...</div>}>
          <Description />
        </Suspense>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
