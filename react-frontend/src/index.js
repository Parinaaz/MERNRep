import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import AddEvent from './components/AddEvent';

ReactDOM.render(
  <Router>
  	<div>

  		<Route exact-path="/" component={App} />
  		<Route path="/add-event" component={AddEvent}/>
  		</div>

  </Router>

        ,  document.getElementById('root'));