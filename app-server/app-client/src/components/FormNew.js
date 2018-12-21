import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './Form';
import { createInfo } from '../actions';

class FormNew extends Component {
	
	onButtonPress() {
		const { title } = this.props;

		console.log( {title} );
		console.log("onButtonPress clicked");
		this.props.createInfo({ title });
	}

	render() {
		console.log("FormNew() Props:", this.props );
		return (
			<div>
				<h1>Create New</h1>
				<Form {...this.props} />
				<button onClick={this.onButtonPress.bind(this)} type="submit">Create</button>
			</div>
		); 
	}
}

function mapStateToProps(state) {
	const { title } = state.infos;

	return { title };
}

export default connect(mapStateToProps, { createInfo })(FormNew);