import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import getPath from "../routes.js";

import SignUpPage from "./SignUpPage.jsx";
import NotFoundPage from "./NotFoundPage.jsx";
import LoginPage from "./LoginPage.jsx";
import CheckTokenPage from "./CheckTokenPage.jsx";
import Navbar from "./Navbar.jsx";

const App = () => (
  <div className="h-100">
    <div className="d-flex flex-column h-100">
      <Router>
        <Navbar />
        <Routes>
          <Route path={getPath.signUpPage()} element={<SignUpPage />} />
          <Route path={getPath.loginPage()} element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path={getPath.chatPage()} element={<CheckTokenPage />} />
        </Routes>
      </Router>
    </div>
  </div>
);

export default App;
