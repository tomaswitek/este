// @flow
import type { Action, LoansState } from '../types';
import { assocPath } from 'ramda';

const initialState = {
  ammountInterval: {
    min: 1000,
    max: 80000,
    step: 1000,
    defaultValue: 40000,
  },
  termInterval: {
    min: 6,
    max: 60,
    step: 6,
    defaultValue: 24,
  },
};

const reducer = (
  state: LoansState = initialState,
  action: Action,
): LoansState => {
  // TODO
  const roundValueByStep = (value) => value;

  switch (action.type) {

    case 'CHANGE_LOAN_AMMOUNT_VALUE': {
      const { value } = action.payload;
      return assocPath(['ammountInterval', 'value'], roundValueByStep(value), state);
    }

    case 'CHANGE_LOAN_TERM_VALUE': {
      const { value } = action.payload;
      return assocPath(['termInterval', 'value'], roundValueByStep(value), state);
    }

    default:
      return state;

  }
};

export default reducer;
