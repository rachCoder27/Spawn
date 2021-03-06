import * as React from 'react';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from '@reach/router';
import { Construction } from 'lib/components';

interface IProps extends RouteComponentProps {
  path: string;
}

export const Appearance: React.FC<IProps> = () => (
  <>
    <Helmet>
      <title>Settings | Appearance</title>
    </Helmet>
    <Construction />
  </>
);
