// @flow
import React from 'react';
import { Box } from '../../common/components';
import { injectIntl } from 'react-intl';
import loansMessages from '../../common/loans/loansMessages';
import LoanSlider from './LoanSlider';

type LoanCalculatorProps = { intl: $IntlShape };

const LoanCalculator = ({ intl }: LoanCalculatorProps) => (
  <Box flexDirection="row" justifyContent="space-between">
    <LoanSlider
      min={1000}
      max={80000}
      step={1000}
      label={intl.formatMessage(loansMessages.loanAmmount)}
      marginRight={1}
      defaultValue={40000}
    />
    <LoanSlider
      min={6}
      max={60}
      step={6}
      label={intl.formatMessage(loansMessages.loanTerm)}
      marginRight={1}
      defaultValue={24}
    />
  </Box>
);

export default injectIntl(LoanCalculator);
