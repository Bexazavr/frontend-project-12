import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import MainPage from "./components/MainPage/MainPage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import { AuthorizationContextProvider } from "./context/AuthorizationContext.js";
import PrivateRoutes from "./utils/PrivateRoutes.jsx";
import "./App.css";

function App() {
  return (
    <AuthorizationContextProvider>
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <Routes>
              <Route element={<PrivateRoutes />}>
                <Route path="/" exact element={<MainPage />} />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
              <Route path="login" element={<LoginPage />} />
            </Routes>
          </BrowserRouter>
        </header>
      </div>
    </AuthorizationContextProvider>
  );
}

export default App;
