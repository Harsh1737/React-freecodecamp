import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'

import Layout from './Layout.jsx'
import About from './components/About/About'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github from './components/Github/Github'
//Method 1
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//       path: 'about',
//       element: <About />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//         },
//     ]
//   }
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:id" element={<User />} />
      <Route path="github" element={<Github />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
