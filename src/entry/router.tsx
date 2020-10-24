import React, { FC, Suspense } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Menu } from 'shared/components/Menu';
import { useVoidReader } from '../shared/hooks';

const Word = React.lazy(() => import('modules/word/page'));
const Words = React.lazy(() => import('modules/words/page'));
const Training = React.lazy(() => import('modules/training/page'));

export const Router: FC = () => {
  useVoidReader();

  return (
    <BrowserRouter>
      <Menu>
        <Switch>
          <Route path="/words">
            <Suspense fallback={<div>Loading...</div>}>
              <Words />
            </Suspense>
          </Route>
          <Route path="/word/:wordName">
            <Suspense fallback={<div>Loading...</div>}>
              <Word />
            </Suspense>
          </Route>
          <Route path="/training">
            <Suspense fallback={<div>Loading...</div>}>
              <Training />
            </Suspense>
          </Route>
          <Route path="/">
            <Redirect to="/words" />
          </Route>
        </Switch>
      </Menu>
    </BrowserRouter>
  );
};
