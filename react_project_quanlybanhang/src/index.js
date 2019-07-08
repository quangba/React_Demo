import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './components/Home';
import Menu from './components/Menu';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const routing = (
    <Router>      
        <div class="container">
            <Menu/>
            <Route exact path = "/" component = {Home} />
            <Route path = "/quan-ly-sach" component = {App} />
        </div>
        
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
