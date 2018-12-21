import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { updateInfo } from '../actions';

class EmployeeForm extends Component {

	// state = {
	// 	_id: this.props.info ? this.props.info._id : null,
	// 	title: this.props.info ? this.props.info.title : ''
	// }

	// componentWillReceiveProps(nextProps) {
	// 	this.setState({
	// 		_id: nextProps.info._id,
	// 		title: nextProps.info.title
	// 	});
	// }

	// formInitialize() {
	//     const initData = {
	//       "title": this.props.title,
	//     };

 //    	this.props.initialize(initData);
 //  	}

	// componentDidMount() {
	// 	this.formInitialize();
	// }
	
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
		
		// console.log("render() EmployeeForm", this.props );

		return (
			<div>
				
				<Field 
					label="Title"
					name="title"
					id="title"
					component={ this.renderField }
				/>
			</div>
		); 
	}
}

function mapStateToProps(state) {
	const { title } = state.infos;
	// console.log("mapStateToProps() EmployeeForm", state );
	return { title };
}

export default reduxForm({  
	// validate,
	form: 'employeeForm'
})(connect(mapStateToProps, { updateInfo })(EmployeeForm));

// export default connect(mapStateToProps, { updateInfo })(EmployeeForm);

// export default EmployeeForm;