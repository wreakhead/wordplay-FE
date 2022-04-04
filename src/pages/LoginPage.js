import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { checkLoggedIn } from "../api";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const check = async () => {
    try {
      await checkLoggedIn(dispatch, navigate, "/home");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    check();
  }, []);

  return (
    <div>
      <LoginForm />
    </div>
  );
}
