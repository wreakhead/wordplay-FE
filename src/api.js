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

export const checkLoggedIn = async (dispatch, navigate, to) => {
  dispatch(userDataFetchStart());

  try {
    const res = await axios.get(`/api/user/check`, {
      withCredentials: "include",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
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
    const res = await axios.post(`/api/user/signin`, user, {
      headers: {
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
    const res = await axios.get(`/api/word/`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
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
    const res = await axios.post(`/api/word/add`, data, {
      headers: {
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
    const res = await axios.delete(`/api/word/${id}`, {
      headers: {
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
    const res = await axios.put(`/api/word/${id}`, data, {
      headers: {
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
    const res = await axios.post(`/api/user/signout`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      withCredentials: "include",
    });
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};
