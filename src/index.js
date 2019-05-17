import React from 'react';
import ReactDOM from 'react-dom';
/*connect redux */
import { Provider } from 'react-redux';
/*create store in redux */
/*add applyMiddleware */
import { createStore, applyMiddleware, combineReducers } from 'redux';
/*create redux-logger */
import { createLogger } from 'redux-logger';
/*This is a async middleware */
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
/*import searchRobots from reducers.js */
import { searchRobots, requestRobots } from './reducers';

/*This is a middleware*/
const logger = createLogger();

/*combine all the reducers */
const rootReducer = combineReducers({ searchRobots, requestRobots });

/*Using reducer to create store, inside which we can then use getState() */
/*add applyMiddleware */
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
               /* Provider can pass down the store to every element inside App*/
                <Provider store={store}>
                   <App /> 
                </Provider>, 
                document.getElementById('root'));
serviceWorker.unregister();
