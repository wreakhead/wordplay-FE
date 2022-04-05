import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateWord } from "../api";

export default function UpdateWordForm(props) {
  const pending = useSelector((state) => state.updateWord);
  const dispatch = useDispatch();
  const word = useRef();
  const mean = useRef();

  const formsubmitted = async () => {
    const data = {
      word: word.current.value,
      meaning: mean.current.value,
    };

    await updateWord(props.id, data, dispatch);
  };
  return (
    <div className="">
      <div className="">
        <form onSubmit={formsubmitted} className="">
          <div className="d-flex mb-3">
            <input
              ref={word}
              required
              type="text"
              className="loginInput m-1"
              placeholder="word"
              defaultValue={props.word}
            />
            <input
              ref={mean}
              required
              type="text"
              className="loginInput m-1"
              placeholder="meaning"
              defaultValue={props.meaning}
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col">
                <button
                  disabled={pending.pending}
                  type="submit"
                  className="loginButton btn"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
