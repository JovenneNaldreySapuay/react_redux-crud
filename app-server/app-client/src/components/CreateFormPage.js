// import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { fetchSingleInfo } from '../actions';
// import CreateForm from './CreateForm';

class CreateFormPage extends Component {
	state = {
		_id: this.props.info ? this.props.info._id : null,
		title: this.props.info ? this.props.info.title : ''
	}

	componentDidMount = () => {
		const { match } = this.props;
		
		if (match.params._id) {
			this.props.fetchSingleInfo(match.params._id);
		}
	}

	componentWillReceiveProps(nextProps) { 
		this.setState({
			_id: nextProps.info._id,
			title: nextProps.info.title
		});
	}

	// saveInfo = ({ _id, title }) => {
		
		// console.log("ID Params", this.props.match.params._id );

		// console.log("ID and Title", {_id, title} );

		// const { _id } = this.props.match.params;

		// console.log("ID eh?", _id );

	// 	if ( _id ) {
	// 		console.log("Running in editing mode...");
	// 		console.log("ID:", _id );

	// 		console.log("New Data after editing:", _id, title );
	// 		return this.props.updateInfo({ _id });
			
	// 	} else {

	// 		console.log("Running in adding mode...");
	// 		console.log("ID:", _id );


	// 		return this.props.createInfo({ title });
	// 	}
	// }

	// deleteInfoClick() {
	// 	const { _id } = this.props.match.params;
	// 	this.props.deleteInfo( _id );
	// }

	render() {

		// console.log("Props in CreateFormPage", this.props );

		return (
			<div>
				<h3>ID: {this.state._id}</h3>
				<h3>Title: {this.state.title}</h3>
			</div>
		); 
	}
}

function mapStateToProps(state, ownProps) {
	return { info: state.infos[ownProps.match.params._id] };
}

export default connect(mapStateToProps, { fetchSingleInfo })(CreateFormPage);