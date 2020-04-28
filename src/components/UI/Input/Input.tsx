import * as React from "react";

export interface Props {
  type: string;
  name: string;
  placeholder?: string;
  label: string;
  message?: string;
  value: string;
  checked?: boolean;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const input: React.FunctionComponent<Props> = ({
  type,
  name,
  placeholder,
  label,
  changeHandler,
  message,
  value,
  checked
}) => {
  let inputElement;
  switch (type) {
    case "checkbox":
      inputElement = (
        <div>
          <div>{message}</div>
          <input
            type={type}
            name={name}
            onChange={changeHandler}
            checked={checked}
          />
          {label}
          <br />
        </div>
      );
      return inputElement;
    default:
      inputElement = (
        <div>
          <label>{label}</label> <br />
          <div>{message}</div>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={changeHandler}
            value={value}
          />
          <br />
        </div>
      );
      return inputElement;
  }
};

export default input;
