import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { robots } from './robots';
/*without exported default, props must surround {} */

ReactDOM.render(
    /* pass the props to CardList.js */
    <CardList robots={robots} />
    , document.getElementById('root'));

serviceWorker.unregister();
