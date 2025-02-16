import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App';
import AddCoffee from './components/AddCoffee';
import UpdateCoffee from './components/UpdateCoffee';

import Error from './components/Error';
import Home from './Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import AuthProvider from './provider/AuthProvider';
import Users from './components/Users';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children: [
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('https://server-omega-ecru-61.vercel.app/coffee'),
  },
  {
    path: '/',
    element: <Home></Home>,
  },
  {
    path: '/addCoffee',
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: '/updateCoffee/:id',
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`https://server-omega-ecru-61.vercel.app/${params.id}`),
    },
    {
      path: '/signup',
      element: <SignUp></SignUp>
    },
    {
      path: '/signin',
      element: <SignIn></SignIn>
    },
    {
      path : '/users',
      element : <Users></Users>,
      loader : ()=>  fetch('https://server-omega-ecru-61.vercel.app/users')
    }
  ]
},
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)