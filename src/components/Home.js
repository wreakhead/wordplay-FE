import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import SearchBar from "./SearchBar";
import Masonry from "react-masonry-css";
import AddWordForm from "./AddWordForm";

export default function Home() {
  const wordData = useSelector((state) => state.wordData);

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };
  return (
    <>
      <div className="homeLayout container ">
        <div className="row mt-3">
          <div className="col ">
            <SearchBar />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col ">
            <button
              className="btn addButton"
              data-bs-toggle="modal"
              data-bs-target="#addWordModal"
            >
              Add
            </button>
          </div>
          <div className="col-lg-10 mt-lg-0 mt-2">
            <div className="totalWords">
              Total Words : {wordData.data?.length}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {wordData.data?.map((word) => {
            return <Card data={word} key={word._id} />;
          })}
        </Masonry>
      </div>

      {/* modal */}
      <div
        className="modal fade"
        id="addWordModal"
        tabIndex="-1"
        aria-labelledby="addWordModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content" style={{ backgroundColor: "#022249" }}>
            <div className="modal-header">
              <h5 className="modal-title" id="addWordModalLabel">
                Add new word
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <AddWordForm />
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
