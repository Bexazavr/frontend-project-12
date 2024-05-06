import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import LoginPage from "./components/LoginPage/LoginPage";
import MainPage from "./components/MainPage/MainPage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import { AuthorizationContextProvider } from "./context/AuthorizationContext.js";
import PrivateRoutes from "./utils/PrivateRoutes.jsx";
import store from "./slices/index.js";
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <Provider store={store}>
      <AuthorizationContextProvider>
        <div className="App">
            <BrowserRouter>
              <Routes>
                <Route element={<PrivateRoutes />}>
                  <Route path="/" element={<MainPage />} exact />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
                <Route path="login" element={<LoginPage />} />
              </Routes>
            </BrowserRouter>
        </div>
      </AuthorizationContextProvider>
    </Provider>
  );
}

export default App;
 