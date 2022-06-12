import React from "react";
import style from "./index.module.css";

export default function index() {
  return (
    <div className={`${style.main} container border p-2 text-uppercase`}>
      <div className="row">
        <div className="col-12">
          <img src="" alt="banner" />
        </div>
      </div>
      <div className="row">
        <div className="col h3">Home</div>
        <div className="col h3">shows</div>
        <div className="col h3">girls</div>
      </div>
    </div>
  );
}
