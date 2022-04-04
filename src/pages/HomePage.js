import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkLoggedIn, getWordData } from "../api";
import Home from "../components/Home";
import Nav from "../components/Nav";

export default function Homepage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newWordAdded = useSelector((state) => state.addWord);
  const wordDeleted = useSelector((state) => state.delWord);
  const updateDeleted = useSelector((state) => state.updateWord);

  const check = async () => {
    try {
      await checkLoggedIn(dispatch, navigate, null);
    } catch (err) {
      console.log(err);
    }
  };
  const getData = async () => {
    try {
      await getWordData(dispatch, navigate);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    check();
    getData();
  }, [newWordAdded.data, wordDeleted.pending, updateDeleted.pending]);
  return (
    <div className="container">
      <Nav />
      <Home />
    </div>
  );
}
