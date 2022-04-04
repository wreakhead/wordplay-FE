import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./userData";
import wordDataReducer from "./wordData";
import addWordReducer from "./addWord";
import delWordReducer from "./delWord";
import updateWordReducer from "./updateWord";
export default configureStore({
  reducer: {
    userData: userDataReducer,
    wordData: wordDataReducer,
    addWord: addWordReducer,
    delWord: delWordReducer,
    updateWord:updateWordReducer,
    
  },
});
