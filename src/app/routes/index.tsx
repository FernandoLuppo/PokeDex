import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Home, Login, Register } from "../pages"
import { AuthProvider, UserGetInfosProvider } from "../shared/context"

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <UserGetInfosProvider>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </UserGetInfosProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}
