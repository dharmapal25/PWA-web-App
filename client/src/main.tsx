import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import JavascriptCompiler from './pages/JSEditor.tsx'
import PythonCompiler from './pages/PythonEditor.tsx'
import Login from './pages/Login.tsx'


const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/javascript",
    element: <JavascriptCompiler />
  },
  {
    path: "/python",
    element: <PythonCompiler />
  },
  {
    path: "/login",
    element: <Login />
  },

  {
    path : "*",
    element: <h1>404 Not Found</h1>
  }
])



createRoot(document.getElementById('root')!).render(


  <RouterProvider router={Routes} />

  

)
