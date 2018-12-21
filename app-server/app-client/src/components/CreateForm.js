import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { createInfo } from '../actions';

class CreateForm extends Component {

	state = {
		data: {
			_id: this.props.info ? this.props.info._id : null,
			title: this.props.info ? this.props.info.title : ''
		},
		loading: false,
		redirect: false,
		errors: {}
	};

	// static getDerivedStateFromProps(nextProps, prevState) {
	// 	console.log("nextProps", nextProps.info );
	// 	console.log("prevState", prevState.data );

 //   		if (nextProps.info !== prevState.data) {
 //     		return { 
 //     			data: {
 //     				_id: nextProps.info,
 //     				title: nextProps.info
 //     			}
 //     		};
 //  		} else {

 //  		 	return null;
 //  		}
	// }

	componentWillReceiveProps = (nextProps) => {
		// console.log("nextProps", nextProps );
		// console.log("nextState", nextState );
  //   	return this.state.data._id !== nextState.data._id;
		
		this.setState({
			data: {
				_id: nextProps.info._id,
				title: nextProps.info.title
			}
		});
	}

	handleOnSubmit = (e) => {

		e.preventDefault();

		const errors = this.validate(this.state.data);

	    this.setState({ errors });

		const isValid = Object.keys(errors).length === 0;

		if (isValid) { 
			
			// Note: code 1 and 2 are the same!

			// code 1:
			// const { title } = this.state.data;

			// code 2:
			const data = {
				title: this.state.data.title
			};

			// code 1 implementation:
			// this.props.createInfo({ title });

			this.setState({ loading: true });

			// code 2 implementation:
			this.props.createInfo( data );

			this.setState({ redirect: true });


		}

		// console.log("initial states are:", this.state.data );

		// console.log("initial state value:", this.state.data.title );

		// console.log("errors in handleOnSubmit():", errors );

		// console.log("errors count:", Object.keys(errors).length);

	};

	handleOnChange = (e) => {

		if (!!this.state.errors[e.target.name]) {

			let errors = Object.assign({}, this.state.errors);

			// console.log("errors?", errors );
					
			delete errors[e.target.name];

			this.setState({

				errors,
				data: {
					...this.state.data,
					[e.target.name]: e.target.value
				}

			});

			// console.log("validate value:", this.validate(this.state.data) );

			// console.log("this:", this );

			// console.log("any errors?", !!this.state.errors[e.target.name] );

			// console.log("name:", e.target.name );
		
			// console.log("value:", e.target.value );

		} else {
			
			// console.log( "CreateForm() - in else..." );

			this.setState({ 
				data: {
					[e.target.name]: e.target.value 
				}
			});
		}
	}

	validate = values => {
    	const errors = {};

    	if (!this.state.data.title) errors.title = "Can't be blank";

    	return errors;
  	};

  	
	render() {

		// console.log("CreateForm()", this.props );

	    const { data, errors, loading, redirect } = this.state;

		// console.log("Props in CreateForm():", this.props);

	  	const InlineError = ({ text }) => (
	  		<span style={{ color: "#ae5856" }}>{text}</span>
		);

		return (
			<div>
				<h1>Add New Record</h1>
				<Form onSubmit={ this.handleOnSubmit } loading={ loading }>
				<Form.Field error={ !!errors.title }>
					<label htmlFor="title">Title</label>
					<input 
					type="text" 
					name="title" 
					value={data.title}
					onChange={this.handleOnChange}
					/>
					{errors.title && <InlineError text={errors.title} />}
				</Form.Field>

				<Button primary>Save</Button>
				<Link to="/" className="ui secondary button">Cancel</Link>
				</Form>
				{ redirect && ( 
					<Redirect to="/games" /> 
				)}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		infos: state.infos
	};
}

export default connect(mapStateToProps, { createInfo })(CreateForm);