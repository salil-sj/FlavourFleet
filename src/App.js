import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./utils/store";
import ResturantDetail from "./components/ResturantDetail";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import ResturantCardShimmer from "./components/shimmer/ResturantCardShimmer";
import ResturantsShimmer from "./components/shimmer/ResturantsShimmer";
import MenuShimmer from "./components/shimmer/MenuShimmer";
import Cart from "./components/Cart";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    children:[
      {
        path:"/",
        element:<Body/>
      }
    ]
    
  },
  {
    path: "/menu/:resId",
    element: <ResturantDetail />,
  },
  {
    path: "/shimmer",
    element: <Cart />,
  },
]);

function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={appRouter} />
        <Outlet/>
        </Provider>
    </div>
  );
}

export default App;
