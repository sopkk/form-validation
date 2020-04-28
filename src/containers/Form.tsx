import * as React from "react";
import { useDispatch } from "react-redux";

import InputsConfig, {
  IInputsConfig
} from "../components/UI/Input/InputsConfig";
import Input from "../components/UI/Input/Input";
import Button from "../components/UI/Button/Button";
import { InputValidation, getIsFormValid } from "../components/Validation";
import * as personActions from "../store/actions/personActions";
import { Person } from "../Types/Person";

const Form: React.FunctionComponent = () => {
  const [inputs, setInputs] = React.useState<IInputsConfig>(InputsConfig);
  const [isFormValid, setIsFormValid] = React.useState<boolean>(false);

  const dispatch = useDispatch();

  React.useEffect(() => {
    setIsFormValid(getIsFormValid(inputs));
  }, [inputs]);

  const inputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    inputName: string
  ) => {
    const inputValidationMessage: string = InputValidation(
      inputName,
      InputsConfig[inputName].type === "checkbox"
        ? event.target.checked
        : event.target.value
    );
    const updatedInput: any = {
      ...inputs,
      [inputName]: {
        ...inputs[inputName],
        value:
          inputs[inputName].type === "checkbox"
            ? event.target.checked
            : event.target.value,
        validationMessage: inputValidationMessage
      }
    };
    setInputs(updatedInput);
  };

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let person: Person = {
      firstname: "",
      lastname: "",
      address: "",
      phone: "",
      email: ""
    };
    Object.keys(inputs).map((key: keyof typeof person) => {
      person[key] = inputs[key].value.toString();
    });
    setInputs(InputsConfig);
    dispatch(personActions.submitPerson(person));
  };

  const formElement = (
    <form onSubmit={onSubmitHandler}>
      {Object.keys(inputs).map((key: string) => {
        return (
          <div key={inputs[key].name}>
            <Input
              type={inputs[key].type}
              label={inputs[key].label}
              name={inputs[key].name}
              placeholder={inputs[key].placeholder}
              changeHandler={event => inputChangeHandler(event, key)}
              message={inputs[key].validationMessage}
              value={inputs[key].value}
              checked={inputs[key].checked}
            />
          </div>
        );
      })}

      <Button type="submit" name="submitButton" disabled={!isFormValid}>
        SUBMIT
      </Button>
    </form>
  );

  return <div>{formElement}</div>;
};

export default Form;
