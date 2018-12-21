import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Dashboard from './Dashboard';
import CreateForm from './CreateForm';
import DataPage from './DataPage';
import Header from './Header';
import FormEdit from './FormEdit';

class App extends Component {
  render() {
    return (
    	<BrowserRouter>	
		    <div className="ui container">
	    		<Header />
	    		
	    		<Switch>
			    	<Route exact path="/" component={Dashboard} />
			    	<Route strict path="/game/new" component={CreateForm} />
			    	<Route exact path="/game/:_id" component={FormEdit} />
			    	<Route exact path="/games" component={DataPage} />
			    	<Route exact path="/images/new" component={ImageUpload} />
			    </Switch>
		    </div>
	    </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);