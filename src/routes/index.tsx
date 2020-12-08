import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Pen from '../pages/Pen';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Pen} />
    </Switch>
  );
}

export default Routes;