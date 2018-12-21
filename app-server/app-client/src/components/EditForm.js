// import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import EmployeeForm from './EmployeeForm';
import { reduxForm, Field } from 'redux-form';
import { fetchSingleInfo } from '../actions';
import { deleteInfo } from '../actions';
// import { Link } from 'react-router-dom';

class EditForm extends Component {

	state = {
		_id: this.props.info ? this.props.info._id : null,
		title: this.props.info ? this.props.info.title : ''
	}

	componentDidMount() {
		const { _id } = this.props.match.params;
		// console.log("From componentDidMount() EditForm.js", {_id} );
		this.props.fetchSingleInfo( _id );
	}

	// Unsafe Lifecycle method
	componentWillReceiveProps(nextProps) { 
		this.setState({
			_id: nextProps.info._id,
			title: nextProps.info.title
		});
	}

	// componentDidUpdate(prevProps, prevState) {
		// const { _id } = this.props.match.params;
		// this.props.fetchSingleInfo( _id );

		// console.log( "componentDidUpdate" );

		// if (prevState.) {

		// }

		// if (this.state.profileOrError === null) {

	    // _.each(this.props.infos, (value, prop) => {
	    //   this.props.updateInfo({ prop, value });
	    // });
  	// }

  	deleteInfoClick() {
		const { _id } = this.props.match.params;
		this.props.deleteInfo( _id );
	}

	renderField(field) {

		const { meta: { touched, error } } = field;
		const className = `form-group ${ touched && error ? 'has-danger' : '' }`;
		
		return (
			<div className={ className }>
				<label>{ field.label }</label>
				<input 
					className="form-control"
					type="text"
					{ ...field.input }
				/>
				<div className="text-help">
				{ touched ? error : '' }
				</div>
			</div>
		);
	}

	render() {
		
		// console.log("From render() EditForm.js", this.props );
		
		// const { info } = this.props;

		// console.log( info );
		
		return (
			<div>
				<h1>Edit Info</h1>
				<h3>ID: {this.state._id}</h3>
				<h3>Title: {this.state.title}</h3>
				
				<form className="ui form">
				<div className="field">
				<Field 
					label="Title"
					name="title"
					component={ this.renderField }
				/>
				</div>

				<button type="submit" className="ui primary button">Save Changes</button>
				<button 
				type="submit" 
				className="ui button red" 
				onClick={(e) => { e.preventDefault(); if (window.confirm('Are you sure you wish to delete this item?')) this.deleteInfoClick(e) } }>
				Delete
				</button>

				</form>
			</div>
		); 
	}
}

function mapStateToProps(state, ownProps) {
	// console.log("infos", {infos} );
	// console.log("ownProps", {ownProps} );
	// console.log("mapStateToProps()", { info: infos[ownProps.match.params._id] } );
	return { info: state.infos[ownProps.match.params._id] };

}

// export default connect(mapStateToProps, { fetchSingleInfo } )(EditForm);

export default reduxForm({  
	// validate,
	form: 'employeeForm'
})(
	connect(mapStateToProps, { fetchSingleInfo, deleteInfo })(EditForm)
);