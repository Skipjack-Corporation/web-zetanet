import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './landing/Landing';
import Technology from './technology/Technology';
import News from './news/News';

const routerConfigurations = [
  { path: '/', component: Landing },
  { path: '/technology', component: Technology },
  { path: '/news', component: News }
];

const mapStateToProps = state => ({});

export function AppRouter({ loggedIn }) {
  return (
    <Router>
      {routerConfigurations.map((routerConfiguration, index) => (
        <Route
          exact
          key={index}
          path={routerConfiguration.path}
          component={routerConfiguration.component}
        />
      ))}
    </Router>
  );
}

export default connect(
  mapStateToProps,
  null
)(AppRouter);
