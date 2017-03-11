// @flow
import type { State, LoanInterval } from '../../common/types';
import React from 'react';
import { Box } from '../../common/components';
import { injectIntl } from 'react-intl';
import loansMessages from '../../common/loans/loansMessages';
import LoanSlider from './LoanSlider';
import { connect } from 'react-redux';
import {
  changeLoanAmmount,
  changeLoanTerm,
} from '../../common/loans/actions';

type LoanCalculatorProps = {
  intl: $IntlShape,
  ammountInterval: LoanInterval,
  termInterval: LoanInterval,
};

const LoanCalculator = ({
  intl,
  ammountInterval,
  termInterval,
  changeLoanAmmount,
  changeLoanTerm,
}: LoanCalculatorProps) => (
  <Box flexDirection="row">
    <LoanSlider
      label={intl.formatMessage(loansMessages.loanAmmount)}
      marginRight={1}
      {...ammountInterval}
      onChange={changeLoanAmmount}
    />
    <LoanSlider
      label={intl.formatMessage(loansMessages.loanTerm)}
      {...termInterval}
      onChange={changeLoanTerm}
    />
  </Box>
);

export default connect(
  (state: State) => ({
    ammountInterval: state.loans.ammountInterval,
    termInterval: state.loans.termInterval,
  }), {
    changeLoanAmmount,
    changeLoanTerm,
  },
)(injectIntl(LoanCalculator));
