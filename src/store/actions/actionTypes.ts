import { Person } from "../../Types/Person";

export const SUBMIT_PERSON_START = "SUBMIT_PERSON_START";
export const SUBMIT_PERSON_SUCCESS = "SUBMIT_PERSON_SUCCESS";
export const SUBMIT_PERSON_FAILED = "SUBMIT_PERSON_FAILED";

export interface submitPersonStart {
  type: typeof SUBMIT_PERSON_START;
}

export interface submitPersonSuccess {
  type: typeof SUBMIT_PERSON_SUCCESS;
  payload: Person;
}

export interface submitPersonFailed {
  type: typeof SUBMIT_PERSON_FAILED;
  error: string;
}

export type PersonActionTypes =
  | submitPersonStart
  | submitPersonSuccess
  | submitPersonFailed;

export type AppActions = PersonActionTypes;
