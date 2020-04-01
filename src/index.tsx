import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './style.css';

import App from './App';

const HotLoaderApp = hot(App);

const EntryPoint = NODE_ENV === 'production' ? App : HotLoaderApp;

ReactDOM.render(<EntryPoint />, document.getElementById('root'));
