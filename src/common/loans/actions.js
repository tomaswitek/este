// @flow
import type { Action } from '../types';
// import { range } from 'ramda';

export const changeLoanAmmount = (value: number): Action => ({
  type: 'CHANGE_LOAN_AMMOUNT_VALUE',
  payload: { value },
});

export const changeLoanTerm = (value: number): Action => ({
  type: 'CHANGE_LOAN_TERM_VALUE',
  payload: { value },
});
