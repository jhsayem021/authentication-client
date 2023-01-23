import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes , Outlet } from 'react-router-dom';
import Navber from './component/Navber';
import AddUser from './component/AddUser';
import Login from './component/Login';
import Allusers from './component/Allusers';
import Home from './component/Home';

function App() {

  const HeaderLayout = () => (
    <>
      <header>
       
      </header>
      <Outlet />
    </>
  );

  // const router = createBrowserRouter([
      
    
  //     {
  //       path: '/allusers',
  //       element: <Allusers></Allusers>,
  //       loader : () => fetch('https://mongo-server-iota.vercel.app/users')
  //     },
    
  //     {
  //       path: '/',
  //       element: <Home></Home>,
  //       loader : () => fetch('https://mongo-server-iota.vercel.app/users')
  //     },
  //     {
  //       path: '/user/add',
  //       element: <AddUser></AddUser>
  //     },
  //     {
  //       path: '/user/login',
  //       element: <Login></Login>,
  //       loader : () => fetch('https://mongo-server-iota.vercel.app/users')
  //     }
  // ])

  const router = createBrowserRouter([
    {
      element: <HeaderLayout />,
      children: [
        {
          path: '/nav',
          element: <Navber></Navber>
        },
        {
          path: '/allusers',
          element: <Allusers></Allusers>,
          loader : () => fetch('https://mongo-server-iota.vercel.app/users')
        },
      
        {
          path: '/',
          element: <Home></Home>,
          loader : () => fetch('https://mongo-server-iota.vercel.app/users')
        },
        {
          path: '/user/add',
          element: <AddUser></AddUser>
        },
        {
          path: '/user/login',
          element: <Login></Login>,
          loader : () => fetch('https://mongo-server-iota.vercel.app/users')
        }
      ],
    },
  ]);



  return (
    <div className="App">
     
      
     {/* <Navber /> */}
      {/* <Routes>
        <Route
        path= '/'
        element = {<Home/>}
        loader = { () => fetch('https://mongo-server-iota.vercel.app/users')}
        />
        <Route
        path= '/allusers'
        element = {<Allusers/>}
        loader = { () => fetch('https://mongo-server-iota.vercel.app/users')}
        />
        <Route
        path= '/user/add'
        element = {<AddUser/>}
        
        />
        <Route
        path= '/user/login'
        element = {<Login/>}
        loader = { () => fetch('https://mongo-server-iota.vercel.app/users')}
        />
        
      </Routes> */}
      
      
      <RouterProvider router = {router}  ></RouterProvider>
    </div>
  );
}

export default App;
