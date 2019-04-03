import React, { Component } from 'react';

class TextInputGroup extends Component {
  render() {
    const {
      label,
      name,
      value,
      placeholder,
      type,
      onChange,
      error
    } = this.props;
    const classname = error ? 'form-control is-invalid' : 'form-control';
    return (
      <div className="form-group">
        <label htmlFor="{name}">{label}</label>
        <input
          type={type}
          name={name}
          className={classname}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {error ? <div className="invalid-feedback">{error}</div> : null}
      </div>
    );
  }
}
export default TextInputGroup;
