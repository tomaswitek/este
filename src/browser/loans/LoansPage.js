// @flow
import React from 'react';
import { Box, PageHeader } from '../../common/components';
import { Title } from '../components';
import linksMessages from '../../common/app/linksMessages';
import { injectIntl } from 'react-intl';
import LoanCalculator from './LoanCalculator';

type LoansPageProps = { intl: $IntlShape };

const LoansPage = ({ intl }: LoansPageProps) => (
  <Box>
    <Title message={linksMessages.loans} />
    <PageHeader
      heading={intl.formatMessage(linksMessages.loans)}
    />
    <LoanCalculator />
  </Box>
);

export default injectIntl(LoansPage);
