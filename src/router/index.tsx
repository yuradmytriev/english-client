import React, { FC } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Word } from 'pages/Word';
import { Words } from 'pages/Words';
import { Training } from 'modules/training/page';

export const Router: FC = () => (
  <BrowserRouter>
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
  </BrowserRouter>
);
