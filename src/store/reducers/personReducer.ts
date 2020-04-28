import * as actions from "../actions/actionTypes";
import { Person } from "../../Types/Person";

type State = { persons: Person[] };

const initialState: State = {
  persons: []
};

const personReducer = (state = initialState, action: actions.AppActions) => {
  switch (action.type) {
    case actions.SUBMIT_PERSON_START:
      return state;
    case actions.SUBMIT_PERSON_SUCCESS:
      const updatedPerson = action.payload;
      return {
        ...state,
        persons: state.persons.concat(updatedPerson)
      };
    case actions.SUBMIT_PERSON_FAILED:
      return state;
    default:
      return state;
  }
};
export default personReducer;
