import { React, useState } from "react";
const handler = require("./handler");

const Textutils = (prop) => {
  const [text, setText] = useState("");

  const onchangehandle = (event) => {
    setText(event.target.value);
  };

  let themetext = "white";
  if (prop.theme === "dark") {
    themetext = "white";
  } else {
    themetext = "black";
  }
  return (
    <>
      <div className={`container  text-${themetext} my-4`}>
        <h3>Enter Text Below</h3>

        <textarea
          className={`form-control `}
          style={{
            backgroundColor:
              prop.theme === "dark" ? "black" : "rgb(73 74 77 / 17%)",
            color: themetext,
            border: `2px solid ${themetext}`,
          }}
          value={text}
          onChange={onchangehandle}
          id="mybox"
          rows="6"
        ></textarea>
        <div className="buttons  my-2">
          <button
            // style={{ margin: "0px 5px" }}
            className="btn btn-primary "
            onClick={() => handler.handleup({ text }, { setText })}
          >
            {" "}
            Convert to Upppercase
          </button>
          <button
            className="btn btn-warning  mx-5"
            onClick={() => handler.handlelow({ text }, { setText })}
          >
            Convert to Lowercase
          </button>
          <button
            className="btn btn-dark  "
            onClick={() => handler.handleclear({ text }, { setText })}
          >
            Clear Text
          </button>
        </div>
      </div>

      <div className={`container text-${themetext}`}>
        <p> {text.length} No of Characters</p>
        <p>No of words {text.split(" ").length}</p>
        <h2 className="text-danger">Preview here</h2>
        <h6> {text} </h6>
      </div>
    </>
  );
};

export default Textutils;
