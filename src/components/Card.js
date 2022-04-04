import React from "react";
import { delWord } from "../api";
import { useDispatch } from "react-redux";
import UpdateWordForm from "./UpdateWordForm";
export default function Card(props) {
  const dispatch = useDispatch();

  const delWord_fun = async (id) => {
    await delWord(id, dispatch);
  };

  return (
    <>
      <div
        className="card"
        style={{
          backgroundColor: `${"#"}${props.data.color}`,
          borderRadius: "20px",
          color: "black",
        }}
      >
        <h5 className="card-header">{props.data.word}</h5>
        <div className="card-body ">
          <h5 className="card-title ">Meaning:</h5>
          <p className="card-text contentArea">{props.data.meaning}</p>
          <button
            className="btn"
            data-bs-toggle="modal"
            data-bs-target="#updateWordModal"
            style={{
              backgroundColor: "#f07c41",
              borderRadius: "20px",
              color: "black",
              fontWeight: "500",
              marginRight: "5px",
            }}
          >
            Update
          </button>
          <button
            onClick={() => delWord_fun(props.data._id)}
            className="btn"
            style={{
              backgroundColor: "#f07c41",
              borderRadius: "20px",
              color: "black",
              fontWeight: "500",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
              <path
                fillRule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* modal */}
      <div
        className="modal fade"
        id="updateWordModal"
        tabIndex="-1"
        aria-labelledby="updateWordModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content" style={{ backgroundColor: "#022249" }}>
            <div className="modal-header">
              <h5 className="modal-title" id="updateWordModalLabel">
                Update word
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <UpdateWordForm id={props.data._id} />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                style={{ borderRadius: "20px" }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
