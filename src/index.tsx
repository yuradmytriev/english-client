import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './style.css';

import App from './App';

const HotLoaderApp: React.ComponentType<any> = hot(App);

const EntryPoint: React.ComponentType<any> =
  process.env.NODE_ENV === 'production' ? App : HotLoaderApp;

ReactDOM.render(<HotLoaderApp />, document.getElementById('root'));
