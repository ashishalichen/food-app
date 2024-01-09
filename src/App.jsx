import Header from "./components/Header"
import Body from "./components/Body"
import About from "./components/About"
import React from 'react'
import ReactDOM from 'react-dom/client'
import About from './components/About.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom'
import Contact from './components/Contact.jsx'
import Error from './components/Error.jsx'
import RestaurantMenu from "./components/ResMenu/RestaurantMenu.jsx"
import Accordion from "./components/ResMenu/Accordion.jsx"

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/accordion/:resId",
        element: <Accordion />
      },
      // {
      //   path: "/restaurant/:resId",
      //   element: <RestaurantMenu />
      // }
    ],
    errorElement: <Error />,
  },

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
)
