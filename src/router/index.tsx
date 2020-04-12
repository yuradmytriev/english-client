import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Word } from 'pages/Word';
import { Words } from 'pages/Words';

export const Router = () => (
  <BrowserRouter>
    <Route path="/words">
      <Words />
    </Route>
    <Route path="/word/:wordName">
      <Word />
    </Route>
  </BrowserRouter>
);
