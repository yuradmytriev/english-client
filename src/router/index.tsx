import React, { FC } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Word, Words } from 'pages';
import { Training } from 'modules/training/page';
import { Menu } from 'components/Menu';

export const Router: FC = () => (
  <BrowserRouter>
    <Menu>
      <Switch>
        <Route path="/words">
          <Words />
        </Route>
        <Route path="/word/:wordName">
          <Word />
        </Route>
        <Route path="/training">
          <Training />
        </Route>
        <Route path="/">
          <Redirect to="/words" />
        </Route>
      </Switch>
    </Menu>
  </BrowserRouter>
);
