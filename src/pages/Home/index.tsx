import React from 'react';
import { AnimateSharedLayout } from 'framer-motion';
import { Route, Router, useHistory } from 'react-router-dom';
import { MainLayout } from '../../components';
import Feed from './Feed';
import Stories from './Stories';
import { Container } from './styles';

const Home = () => {
  const history = useHistory();

  return (
    <MainLayout>
      <AnimateSharedLayout type="crossfade">
        <Router history={history}>
          <Route path={['/home/:id', '/home']} component={Stories} />
        </Router>
      </AnimateSharedLayout>

      <Container>
        <Feed />
      </Container>
    </MainLayout>
  );
};

export default Home;
