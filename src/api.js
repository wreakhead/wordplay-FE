import axios from "axios";
import {
  userDataFetchError,
  userDataFetchStart,
  userDataFetchSucess,
} from "./redux/userData";

import {
  wordDataFetchError,
  wordDataFetchStart,
  wordDataFetchSucess,
} from "./redux/wordData";
import {
  addWordFetchError,
  addWordFetchStart,
  addWordFetchSucess,
} from "./redux/addWord";

import {
  delWordFetchError,
  delWordFetchStart,
  delWordFetchSucess,
} from "./redux/delWord";

import {
  updateWordFetchError,
  updateWordFetchStart,
  updateWordFetchSucess,
} from "./redux/updateWord";

const URL = process.env.REACT_APP_API;

export const checkLoggedIn = async (dispatch, navigate, to) => {
  dispatch(userDataFetchStart());

  try {
    const res = await axios.get(`${URL}/user/check`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      withCredentials: "include",
    });
    dispatch(userDataFetchSucess(res.data));
    if (to) navigate(to);
  } catch (err) {
    navigate("/");
    dispatch(userDataFetchError());
  }
};

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(userDataFetchStart());
  try {
    const res = await axios.post(`${URL}/user/signin`, user, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      withCredentials: "include",
    });
    navigate("/home");
    dispatch(userDataFetchSucess(res.data));
  } catch (err) {
    dispatch(userDataFetchError(err));
  }
};

export const getWordData = async (dispatch, navigate) => {
  dispatch(wordDataFetchStart());
  try {
    const res = await axios.get(`${URL}/word/`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      withCredentials: "include",
    });
    const sorted = res.data.sort((p1, p2) => {
      return new Date(p2.createdAt) - new Date(p1.createdAt);
    });
    dispatch(wordDataFetchSucess(sorted));
  } catch (err) {
    dispatch(wordDataFetchError(err));
  }
};

export const addNewWord = async (data, dispatch) => {
  dispatch(addWordFetchStart());
  try {
    const res = await axios.post(`${URL}/word/add`, data, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      withCredentials: "include",
    });

    dispatch(addWordFetchSucess(res.data));
  } catch (err) {
    dispatch(addWordFetchError(err));
  }
};

export const delWord = async (id, dispatch) => {
  dispatch(delWordFetchStart());
  try {
    const res = await axios.delete(`${URL}/word/${id}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      withCredentials: "include",
    });
    dispatch(delWordFetchSucess(res.data));
  } catch (err) {
    dispatch(delWordFetchError(err));
  }
};

export const updateWord = async (id, data, dispatch) => {
  dispatch(updateWordFetchStart());
  try {
    const res = await axios.put(`${URL}/word/${id}`, data, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      withCredentials: "include",
    });
    dispatch(updateWordFetchSucess(res.data));
  } catch (err) {
    dispatch(updateWordFetchError(err));
  }
};

export const signout = async () => {
  try {
    const res = await axios.get(`${URL}/user/signout`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      withCredentials: "include",
    });
    //window.location.reload();
  } catch (error) {
    console.log(error);
  }
};
