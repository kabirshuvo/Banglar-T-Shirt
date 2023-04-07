import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import App from './Layout/App';
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';
import Grandpa from './components/Grandpa/Grandpa';
import Home from './components/Home/Home';
import OrderReview from './components/OrderReview/OrderReview';
import "./index.css";


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('data.json')
      },{
        path: '/orders',
        element: <OrderReview></OrderReview>
      },
      {
        path: '/grandpa',
        element: <Grandpa></Grandpa>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: 'contact',
        element:<ContactUs></ContactUs>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
);
