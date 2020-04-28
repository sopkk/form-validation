import { Props } from "./Input";

export interface IInputsConfig {
  [key: string]: InputsConfigType & Value & Rules;
}

type InputsConfigType = Omit<Props, "changeHandler">;

export type Value = {
  value: string | boolean;
  checked?: boolean;
  validationMessage?: string;
};

type Rules = {
  rules: { required: boolean; pattern?: RegExp; minLength?: number };
};

const InputsConfig: IInputsConfig = {
  firstname: {
    type: "text",
    name: "firstname",
    placeholder: "Enter your first name",
    label: "First name",
    value: "",
    rules: { required: true, minLength: 1 }
  },
  lastname: {
    type: "text",
    name: "lastname",
    placeholder: "Enter your lastname",
    label: "Lastname",
    value: "",
    rules: { required: true, minLength: 1 }
  },
  address: {
    type: "text",
    name: "address",
    placeholder: "Enter your address",
    label: "Address",
    value: "",
    rules: { required: true, minLength: 1 }
  },
  phone: {
    type: "text",
    name: "phone",
    placeholder: "+0000000000",
    label: "Phone number",
    value: "",
    rules: { required: true, pattern: /^[+][0-9]{10}/ }
  },
  email: {
    type: "email",
    name: "email",
    placeholder: "example@example.com",
    label: "Email",
    value: "",
    rules: {
      required: true,
      pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    }
  },
  human: {
    type: "checkbox",
    name: "human",
    label: "I am not a robot",
    value: "",
    checked: false,
    rules: { required: true }
  }
};

export default InputsConfig;
