import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Word } from 'pages/Word';
import { Words } from 'pages/Words';

export const Router = () => (
  <BrowserRouter>
    <Redirect to="/words" />
    <Route path="/words">
      <Words />
    </Route>
    <Route path="/word/:id">
      <Word />
    </Route>
  </BrowserRouter>
);
