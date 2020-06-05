import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import 'antd/dist/antd.css';
import './reset-antd.css';
import App from './App';

const HotLoaderApp: React.ComponentType<any> = hot(App);

const EntryPoint: React.ComponentType<any> =
  process.env.NODE_ENV === 'production' ? App : HotLoaderApp;

ReactDOM.render(<HotLoaderApp />, document.getElementById('root'));
