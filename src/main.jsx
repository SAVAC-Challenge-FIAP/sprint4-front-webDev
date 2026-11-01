import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import './index.css'
import App from './App.jsx'
import MusicRecommendationsPage from './pages/MusicRecommendationsPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {path: "/descobrir-musicas", element: <MusicRecommendationsPage/>},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
