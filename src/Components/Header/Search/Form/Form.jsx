import React from "react";
import Button from "./Button/Button";
import Input from "./Input/Input";
import "./form.css";

function Form() {
  return (
    <div className="search_form">
      <Input />
      <Button>SEARCH</Button>
    </div>
  );
}

export default Form;
