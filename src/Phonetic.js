import React from "react";
import "./Phonetics.css";

export default function Phonetic(props) {
  console.log(props.phonetics);
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
      <br />
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
