import React, { useState } from 'react'

const FormInput = (props) => {
    const [focused, setFocused] = useState(false);

    const handleFocus = () => {
        setFocused(true);
    }
  return (
    <div>
      <label htmlFor={props.label}> {props.label}</label>
      <input
        type="text"
        placeholder={props.placeholder}
        onChange={props.handleChange}
        value={props.username}
        required
              onBlur={handleFocus}
              pattern = {props.pattern}
        focused={focused.toString()}
      />
      <span>{props.errorMessage}</span>
    </div>
  );
}

export default FormInput