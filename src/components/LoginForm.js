import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../api";

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useRef();
  const password = useRef();
  const login = useSelector((state) => state.userData);
  const formsubmitted = async (e) => {
    e.preventDefault();
    const data = {
      username: user.current.value,
      password: password.current.value,
    };

    await loginUser(data, dispatch, navigate);
    console.log(login);
  };

  return (
    <div className="loginPage">
      <div className="">
        <form onSubmit={formsubmitted} className="loginBox shadow p-3 mb-5">
          <input
            ref={user}
            required
            type="text"
            className="loginInput"
            placeholder="username"
          />
          <input
            ref={password}
            required
            type="password"
            className="loginInput"
            placeholder="password"
          />
          <div className="container">
            <div className="row">
              <div className="col">
                <button
                  disabled={login.pending}
                  type="submit"
                  className="loginButton btn"
                >
                  login
                </button>
              </div>
              <div className="col">
                <button className="registerButton btn" disabled>
                  Register
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
