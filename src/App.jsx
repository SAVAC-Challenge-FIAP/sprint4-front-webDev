import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MusicRecommendationsPage from './pages/MusicRecommendationsPage'

const App = () => (
  <Routes>
    <Route element={<HomePage />} path="/" />
    <Route element={<MusicRecommendationsPage />} path="/descobrir-musicas" />
    <Route element={<Navigate replace to="/" />} path="*" />
  </Routes>
)

export default App
