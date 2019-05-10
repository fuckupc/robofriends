import React from 'react';
import ReactDOM from 'react-dom';
/*connect redux */
import { Provider } from 'react-redux';
/*create store in redux */
import { createStore } from 'redux';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
/*import searchRobots from reducers.js */
import { searchRobots } from './reducers';

/*Using reducer to create store, inside which we can then use getState() */
const store = createStore(searchRobots);

ReactDOM.render(
               /* Provider can pass down the store to every element inside App*/
                <Provider store={store}>
                   <App /> 
                </Provider>, 
                document.getElementById('root'));
serviceWorker.unregister();
