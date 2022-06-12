import React, { useState } from "react";
import style from "./index.module.css";
import defaultImage from "../../media/images/girl.png";

export default function Index({ name, imageUrl }) {
  const [looks, setLooks] = useState(5);
  const [sex, setSexs] = useState(5);
  const [relate, setRelate] = useState(5);

  return (
    <div
      className={`${style.main} container border rounded shadow-lg text-capitalize`}
    >
      <div className="row">
        <div className="col-3 text-end fw-bold">name:</div>
        <div className="col-9 text-start">{name || "Jane Dowe"}</div>
      </div>
      <div>
        <img
          src={imageUrl || defaultImage}
          className={`img-thumbnail img-fluid`}
          alt="Person"
        />
      </div>
      <div>
        <div>
          <label for="looksRange" class="form-label">
            Looks: {looks}
          </label>
        </div>
        <input
          type="range"
          class="form-range"
          id="looksRange"
          defaultValue={looks}
          min={1}
          max={10}
          step={1}
          onChange={(e) => setLooks(e.target.value)}
        />
      </div>
      <div>
        <div>
          <label for="sexRange" class="form-label">
            Sexual attraction: {sex}
          </label>
        </div>
        <input
          type="range"
          class="form-range"
          id="sexRange"
          defaultValue={sex}
          min={1}
          max={10}
          step={1}
          onChange={(e) => setSexs(e.target.value)}
        />
      </div>
      <div>
        <div>
          <label for="relationRange" class="form-label">
            Realtionship: {relate}
          </label>
        </div>
        <input
          type="range"
          class="form-range"
          id="relationRange"
          defaultValue={relate}
          min={1}
          max={10}
          step={1}
          onChange={(e) => setRelate(e.target.value)}
        />
      </div>
      <div className="d-grid mt-5">
        <button className="btn btn-primary">submit vote</button>
      </div>
    </div>
  );
}

// looks: Number,
// targetId: String,
// personality: Number,
// indentifier: String,
// sexualAttraction: Number,
// relationshipAttraction: Number,
