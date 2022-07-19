import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import CallForSpeakersPage from "./pages/CallForSpeakersPage";
import "react-advanced-cropper/dist/style.css";
import { AuthProvider, AuthProviderProps } from "oidc-react";
import CallbackPage from "./pages/CallbackPage";
import SignOutRedirectPage from "./pages/SignOutRedirectPage";

const oidcConfig: AuthProviderProps = {
  authority: "https://ids.latinonet.online",
  clientId: "callforspeakers_dev",
  redirectUri: "http://localhost:3000/callback",
  scope: "openid profile roles latinonetonline_api",
  responseType: "id_token token",
  postLogoutRedirectUri: "http://localhost:3000/signout-redirect",
  autoSignIn: false,
  loadUserInfo: true,
};

const App = () => {
  return (
    <AuthProvider {...oidcConfig}>
      <div id="app_container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CallForSpeakersPage />}></Route>
            <Route path="/callback" element={<CallbackPage />}></Route>
            <Route
              path="/signout-redirect"
              element={<SignOutRedirectPage />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
};

export default App;
