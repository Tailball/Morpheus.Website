import '../styles/index.scss';

import React from 'react';
import ReactDom from 'react-dom';

import App from './components/App';

const reactContainer = document.querySelector('#reactContainer');
ReactDom.render(<App />, reactContainer);