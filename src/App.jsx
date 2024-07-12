import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import Deal from './components/Deal'


function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path="/deal" element={<Deal />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
