import React from "react";
import style from "./index.module.css";

export default function index({
  name,
  imageUrl,
  occupation,
  education,
  bodyCount,
  relationshipStatus,
  age,
}) {
  return (
    <div className={style.main}>
      <div>Name: {name || "Jane Dowe"}</div>
      <div>
        <img src={imageUrl} height={100} width={100} alt="Person"/>
      </div>
      <div>Age: {age || 18}</div>
      <div>Ocupation: {occupation || "Occupation"}</div>
      <div>Education: {education || "Education"}</div>
      <div>Body Cunt: {bodyCount || "Over 9000"}</div>
      <div>Relationship Status: {relationshipStatus || "Single"}</div>
    </div>
  );
}