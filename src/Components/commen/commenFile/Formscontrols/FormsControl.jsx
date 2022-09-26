import React from "react";
import "./FormsControl.css";

export const Textarea = ({ input, meta: { touched, error }, ...props }) => {
  let metaError = touched && error;
  return (
    <div>
      <textarea className={metaError ? "error" : ""} {...input} {...props} />
      <div>{metaError && <span className="span">{error}</span>}</div>
    </div>
  );
};

export const Input = ({ input, meta: { touched, error }, ...props }) => {
  let metaError = touched && error;
  return (
    <div>
      <input className={metaError ? "error" : ""} {...input} {...props} />
      <div>{metaError && <span className="span">{error}</span>}</div>
    </div>
  );
};
