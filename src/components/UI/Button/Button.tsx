import * as React from "react";

export interface Props {
  type: "button" | "submit" | "reset";
  name: string;
  disabled: boolean;
}

const Button: React.FunctionComponent<Props> = ({
  type,
  name,
  disabled,
  children
}) => {
  return (
    <div>
      <button type={type} name={name} disabled={disabled}>
        {children}
      </button>
    </div>
  );
};

export default Button;
