import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import ViewDetails from './Pages/ViewDetails';
import CreateDetails from './Pages/CreateDetails';
import CardDetails from './Pages/CardDetails';
import ViewCardDetails from './Pages/ViewCardDetails';
import ViewTransaction from './Pages/ViewTransaction';
import AddTransaction from './Pages/AddTransaction';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import AddAccount from './Pages/AddAccount';
import ViewAccount from './Pages/ViewAccount';
import ViewAccountByCid from './Pages/ViewAccountByCid';
import CustomerDashboard from './Pages/CustomerDashboard';
import ViewCustomerDetails from './Pages/ViewCustomerDetails';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {path: "/",
element: <App />},
{path:"/customerdashboard",
element:<CustomerDashboard/>,
children:[
  {path:"view",
element:<ViewCustomerDetails/>},
{
  path: "addTransaction",
  element: <AddTransaction/>
}
]
},
{
  path:"/dashboard",
  element: <Dashboard />,
  children: [
    {
      path: "view/:id",
      element: <ViewDetails />
    },
    {
      path: "create",
      element: <CreateDetails />
    },
    {
      path:"addaccount",
      element:<AddAccount/>},
      {path:"viewaccount",
    element:<ViewAccount/>},
    {path:"viewaccountbycid",
  element:<ViewAccountByCid/>},
      {
      path: "card",
      element: <CardDetails />
    },
    {
      path: "viewCard/:id",
      element: <ViewCardDetails/>
    },
    {
      path: "viewTransaction",
      element: <ViewTransaction/>
    },
    {
      path: "addTransaction",
      element: <AddTransaction/>
    }
  ]
},

])
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
