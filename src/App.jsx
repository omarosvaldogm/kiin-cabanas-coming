import { BrowserRouter, Routes, Route } from "react-router-dom"
import InicioPage from "./pages/InicioPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InicioPage />} />
        {/* Agrega aquí más rutas si las necesitas */}
      </Routes>
    </BrowserRouter>
  )
}

export default App