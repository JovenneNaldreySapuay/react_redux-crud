import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
	
	render() {
		return (
			<nav>
        		<div className="ui menu">
					<Link to="/" className="item">Home</Link>		
					<Link to="/game/new" className="item">Add New</Link>		
					<Link to="/games" className="item">Games</Link>		
					<Link to="/images/new" className="item">Upload</Link>		
				</div>
			</nav>
		); 
	}
}

export default Header;