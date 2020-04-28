import * as actions from "./actionTypes";
import { Person } from "../../Types/Person";
import { Dispatch } from "redux";
import axios from "axios";

const PERSONS_API_URL = "https://person-data.firebaseio.com/persons.json";

export const submitPerson = (person: Person) => {
  return (dispatch: Dispatch<actions.AppActions>) => {
    dispatch(submitPersonStart());
    axios
      .post(PERSONS_API_URL, person)
      .then(response => {
        console.log(response);
        dispatch(submitPersonSuccess(person));
      })
      .catch((error: Error) => {
        dispatch(submitPersonFailed(error.message));
      });
  };
};

const submitPersonStart = (): actions.AppActions => ({
  type: actions.SUBMIT_PERSON_START
});

const submitPersonSuccess = (person: Person): actions.AppActions => ({
  type: actions.SUBMIT_PERSON_SUCCESS,
  payload: person
});

const submitPersonFailed = (error: string): actions.AppActions => ({
  type: actions.SUBMIT_PERSON_FAILED,
  error: error
});
