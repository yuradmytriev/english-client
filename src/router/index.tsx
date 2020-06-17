import React, { FC } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Word } from 'pages';
import { Menu } from 'shared/components/Menu';
import { Training } from 'modules/training/page';
import { Words } from 'modules/words/page';

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
