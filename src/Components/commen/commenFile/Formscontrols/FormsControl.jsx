import React from "react";
import "./FormsControl.css";

export const Textarea = ({ input, meta, ...props }) => {
  let metaError = meta.touched && meta.error;
  return (
    <div>
      <textarea className={metaError ? "error" : ""} {...input} {...props} />
      <div>{metaError && <span className="span">{meta.error}</span>}</div>
    </div>
  );
};

export const Input = ({ input, meta, ...props }) => {
  let metaError = meta.touched && meta.error;
  return (
    <div>
      <input className={metaError ? "error" : ""} {...input} {...props} />
      <div>{metaError && <span className="span">{meta.error}</span>}</div>
    </div>
  );
};
