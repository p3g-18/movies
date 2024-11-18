import Login from "./Components/Login";
import Browse from "./Components/Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Description from "./Components/Description";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/MovieDetails/:id", //setting up the route dynamically
      element: <Description />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
