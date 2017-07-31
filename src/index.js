import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import TodoStore from './services/TodoStore';

TodoStore.init();
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
