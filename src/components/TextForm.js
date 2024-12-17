import React, { useState } from "react";
import Form from "react-bootstrap/Form";

function TextControlsExample(props) {
  const [text, setText] = useState("");

  const handleUpCLick = () => {
    // console.log("Upper Case Button Clicked");
    let temp = text.toUpperCase();
    setText(temp);
  };

  const handleClear = () => {
    // console.log("Clear Button Clicked");
    setText("");
  }

  // const check = prompt("Upper Cse Button Clicked");
  // console.log(check);


  const handleDownCLick = () => {
    // console.log("Lower Case Button Clicked");
    let temp = text.toLowerCase();
    setText(temp);
  };

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  return (
    <>
      <Form>
        <h4>{props.heading}</h4>
        <Form.Group className="mb-3 " controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows={8}
            value={text}
            onChange={handleOnChange}
            style={{ border: "2px solid black" }}
          />
        </Form.Group>
        <button className="btn btn-primary mx-1" onClick={handleUpCLick}>UpperCase</button>
        <button className="btn btn-danger mx-1" onClick={handleDownCLick}>LowerCase</button>
        <button className="btn btn-success mx-1" onClick={handleClear}>Clear Text</button>
      </Form>
      <h4 className="my-3"> Your text Summary</h4>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <h4 className="my-3">Preview</h4>
        <p>{text}</p>
    

    </>
  );
}

export default TextControlsExample;
