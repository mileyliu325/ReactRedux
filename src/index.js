import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let initialStore = {
};
const store = createStore(rootReducer, initialStore,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
document.getElementById('root'));

