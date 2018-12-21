import React, { Component } from 'react';
import { connect } from 'react-redux';
import { infoUpdate } from '../actions';

class Form extends Component {

	state = {
		data: {
			_id: this.props ? this.props._id : null,
			title: this.props ? this.props.title : ''
		}
	};

	render() {

		return (
			<div>
		    	<label>Title: </label>
		    	<input placeholder="Title" value={this.state.data.title} onChange={value => this.props.infoUpdate({ prop: 'title', value })} /> 
		  	</div>
		); 
	}
}

function mapStateToProps(state) {

	const { title } = state.infos;

	return { title };
}

export default connect(mapStateToProps, { infoUpdate })(Form);