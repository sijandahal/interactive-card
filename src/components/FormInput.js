import React from 'react'

const FormInput = (props) => {
  return (
    <div>
      <label htmlFor={props.label}> {props.label}</label>
      <input
        type="text"
        placeholder={props.placeholder}
        onChange={props.handleChange}
              value={props.username} required
          />
          <span>{props.errorMessage }</span>
    </div>
  );
}

export default FormInput