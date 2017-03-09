// @flow
import React from 'react';
import { Box } from '../../common/components';
import { Title } from '../components';
import linksMessages from '../../common/app/linksMessages';

const LoansPage = () => (
  <Box>
    <Title message={linksMessages.loans} />
  </Box>
);

export default LoansPage;
