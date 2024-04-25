import { useState, useRef } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useAuthorizationContext } from "../../hooks/useAuthorizationContext.js";
import axios from "axios";

import "./LoginPage.css";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginPage = () => {
  const { setLogin } = useAuthorizationContext();
  const loginInput = useRef();
  const [loginFailedError, setLoginFailedError] = useState("");
  const navigateTo = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    onSubmit: async (values) => {
      try {
        const response = await axios.post("/api/v1/login", values);
        localStorage.setItem("user", JSON.stringify(response.data));
        setLogin(true);
        navigateTo("/");
      } catch (e) {
        if (e.response.status === 401) {
          setLoginFailedError("Ошибка авторизации");
        } else {
          setLoginFailedError(e.message);
        }
        loginInput.current.reset();
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-group mb-3">
        <label htmlFor="username" className="form-label">
          Ваш ник
        </label>
        <input
          className="form-control"
          id="username"
          name="username"
          ref={loginInput}
          onChange={formik.handleChange}
          value={formik.values.username}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="password" className="form-label">
          Пароль
        </label>
        <input
          className="form-control"
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </div>
      {loginFailedError && (
        <div className="form-group mb-3">
          <h4>{loginFailedError}</h4>
        </div>
      )}

      <button className="btn btn-primary" type="submit">
        Войти
      </button>
    </form>
  );
};

export default LoginPage;
