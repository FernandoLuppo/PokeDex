import {
  Home,
  Login,
  NewPassword,
  Pokemon,
  RecoverPassword,
  Register,
  UserProfile
} from "../pages"
import {
  AuthProvider,
  AuthRequire,
  PokemonFilterProvider,
  RecoverPasswordProvider,
  UserGetInfosProvider
} from "../shared/context"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <UserGetInfosProvider>
          <PokemonFilterProvider>
            <RecoverPasswordProvider>
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
                <Route
                  path="/recover-password/check-email"
                  element={<RecoverPassword />}
                />
                <Route
                  path="/recover-password/new-password/:fullCode"
                  element={<NewPassword />}
                />

                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />

                <Route path="/*" element={<Navigate to="/" />} />
              </Routes>
            </RecoverPasswordProvider>
          </PokemonFilterProvider>
        </UserGetInfosProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}
