import React, { FC } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Word } from 'pages/Word';
import { Words } from 'pages/Words';

export const Router: FC = () => (
  <BrowserRouter>
    <Route exec path="/">
      <Redirect to="/words" />
    </Route>
    <Route path="/words">
      <Words />
    </Route>
    <Route path="/word/:wordName">
      <Word />
    </Route>
  </BrowserRouter>
);
