import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../containers/app';

export default (
  <Route path='/' component={(props) => { return props.children; }}>
    <IndexRoute component={App} />
  </Route>
);
