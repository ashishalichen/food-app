import Header from "./components/Header"
import Body from "./components/Body"
import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
// import About from './components/About.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom'
import Contact from './components/Contact.jsx'
import Error from './components/Error.jsx'
import Accordion from "./components/ResMenu/Accordion.jsx"


// chunking
// code splitting
// dynamic bundling
// lazy loading
// on demand loading
// dynamic import
const About = lazy(() => import('./components/About.jsx'))

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
        element: <Suspense fallback={<h1>Loading...</h1>}>
          <About />
        </Suspense>
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/accordion/:resId",
        element: <Accordion />
      },
    ],
    errorElement: <Error />,
  },

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
)
