import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './routes/Home.jsx'
import Appointment from './routes/Appointment.jsx'
import Articles from './routes/Articles.jsx'
import Article1 from './routes/articles/Article1.jsx'
import Article2 from './routes/articles/Article2.jsx'
import Article3 from './routes/articles/Article3.jsx'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

const router = createBrowserRouter([
  {
    
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/appointment",
        element: <Appointment/>,
      }, 
      {
        path: "/articles",
        element: <Articles/>,
      },
      {
        path: "/article1",
        element: <Article1/>,
      }, 
      {
        path: "/article2",
        element: <Article2/>,
      },
      {
        path: "/article3",
        element: <Article3/>,
      },
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
