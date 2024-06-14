import { useState, useRef, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import axios from "axios";
import { addLoginInfo } from "../slices/authSlice.js";
import img from "../assets/avatar.jpg";
import getPath from "../routes.js";
import * as yup from 'yup';

const LoginPage = () => {
  const [loginFailed, setFailedLogin] = useState(false);
  const dispatch = useDispatch();
  const inputEl = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    inputEl.current.focus();
  }, [loginFailed]);
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: yup.object({
      username: yup.string().required(('yup.required')),
      password: yup.string().required(('yup.required')),
    }),
    onSubmit: async (values) => {
      setFailedLogin(false);
      try {
        const result = await axios.post(getPath.loginPath(), values);
        const { data } = result;
        dispatch(addLoginInfo({ data }));
        navigate(getPath.chatPage());
      } catch (error) {
        formik.setSubmitting(false);
        if (error.response.status === 401) {
          setFailedLogin(true);
          inputEl.current.select();
        } else {
          throw error;
        }
      }
    },
  });

  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center align-content-center h-100">
        <div className="col-12 col-md-8 col-xxl-6">
          <div className="card shadow-sm">
            <div className="card-body row p-5">
              <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                <img src={img} className="rounded-circle" alt="Войти" />
              </div>
              <form
                onSubmit={formik.handleSubmit}
                className="col-12 col-md-6 mt-3 mt-mb-0"
                disabled={formik.isSubmitting}
              >
                <h1 className="text-center mb-4">Войти</h1>
                <div className="form-floating mb-3">
                  <input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                    className={
                      loginFailed ? "form-control is-invalid" : "form-control"
                    }
                    type="text"
                    name="username"
                    autoComplete="username"
                    placeholder="Ваш ник"
                    id="username"
                    required
                    disabled={formik.isSubmitting}
                    ref={inputEl}
                  />
                  <label htmlFor="username">Ваш ник</label>
                </div>
                <div className="form-floating mb-4">
                  <input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    className={
                      loginFailed ? "form-control is-invalid" : "form-control"
                    }
                    type="password"
                    name="password"
                    autoComplete="password"
                    placeholder="Пароль"
                    id="password"
                    required
                    disabled={formik.isSubmitting}
                  />
                  <label htmlFor="password">Пароль</label>
                  {loginFailed ? (
                    <div className="invalid-tooltip">
                      Неверные имя пользователя или пароль
                    </div>
                  ) : null}
                </div>
                <button
                  disabled={formik.isSubmitting}
                  type="submit"
                  className="w-100 mb-3 btn btn-outline-primary"
                >
                  Войти
                </button>
              </form>
            </div>
            <div className="card-footer p-4">
              <div className="text-center">
                <span>Нет аккаунта?</span>{" "}
                <NavLink to={getPath.notFoundPage()}>Регистрация</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;