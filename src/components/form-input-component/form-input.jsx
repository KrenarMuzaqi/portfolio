import React from "react";

import "./_form-input.scss";

export const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div>
      <div className="group">
        <input className="form-input" onChange={handleChange} {...otherProps} />
        {label ? (
          <label
            className={`${
              otherProps.value.length ? "shrink" : ""
            } form-input-label`}
          >
            {label}
          </label>
        ) : null}
      </div>
    </div>
  );
};

export const FormTextarea = ({ handleChange, label, ...otherProps }) => {
  return (
    <div>
      <div className="group">
        <textarea
          className="form-input"
          onChange={handleChange}
          {...otherProps}
        ></textarea>
        {label ? (
          <label
            className={`${
              otherProps.value.length ? "shrink" : ""
            }  form-input-label`}
          >
            {label}
          </label>
        ) : null}
      </div>
    </div>
  );
};
