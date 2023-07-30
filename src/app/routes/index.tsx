import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Home, Login, Register } from "../pages"

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}
