import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Home, Login, Pokemon, Register, UserProfile } from "../pages"
import {
  AuthProvider,
  AuthRequire,
  PokemonFilterProvider,
  UserGetInfosProvider
} from "../shared/context"

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <UserGetInfosProvider>
          <PokemonFilterProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pokemon/:id" element={<Pokemon />} />
              <Route
                path="/user/:name"
                element={
                  <AuthRequire>
                    <UserProfile />
                  </AuthRequire>
                }
              />

              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />

              <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
          </PokemonFilterProvider>
        </UserGetInfosProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}
