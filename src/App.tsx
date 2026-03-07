import { createBrowserRouter, RouterProvider } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
// import "font-awesome/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


import MasterLayout from "./components/MasterLayout/MasterLayout";
import Home from "./components/home/home";
import Cars from "./components/cars/cars";
import Details from "./components/details/details";




function App() {

  const routes = createBrowserRouter([
    {path:'/',
      element:<MasterLayout/>,
      children:[
        {index:true, element:<Home/>},
        {path:"/home",element:<Home/>},
        {path:"/cars",element:<Cars/>},
        {path:"/details",element:<Details/>},
        {path:"/details/:id",element:<Details/>}
      ]
    },
  ])

  return (
    <>
      <RouterProvider router = {routes}></RouterProvider>
    </>
  )
}

export default App
