import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { updateInfo, fetchSingleInfo } from '../actions';

class FormEdit extends Component {

	state = {
		_id: this.props.info ? this.props.info._id : null,
		title: this.props.info ? this.props.info.title : '',
		loading: false,
		errors: {},
		redirect: false
	};

	componentDidMount = () => {
		const { match } = this.props;
		
		if (match.params._id) {
			this.props.fetchSingleInfo(match.params._id);
		}
	}

	/* Deprecated Lifecycle */
	componentWillReceiveProps(nextProps) { 
		console.log("nextProps", nextProps.info );
		this.setState({	
			_id: nextProps.info._id,
			title: nextProps.info.title
		});
	}

	// static getDerivedStateFromProps(nextProps, prevState) {
	// 	console.log("nextProps", nextProps.info );
	// 	console.log("prevState", prevState );

 //   		if (nextProps.info !== prevState) {
 //     		return { 
 //     			_id: nextProps.info._id,
 //     			title: nextProps.info.title
 //     		};
 //  		} else {

 //  		 	return null;
 //  		}
	// }

	handleOnUpdate = (e) => {

		e.preventDefault();

		const errors = this.validate(this.state.data);

	    this.setState({ errors });

		const isValid = Object.keys(errors).length === 0;

		if (isValid) { 

			const data = {
				_id: this.state._id,
				title: this.state.title
			};

			console.log("Id", this.state._id );
			console.log("title", this.state.title );
				
			this.setState({ loading: true });

			this.props.updateInfo( data );

			this.setState({ redirect: true });

		}
	};

	
	handleOnChange = (e) => {

		if (!!this.state.errors[e.target.name]) {

			let errors = Object.assign({}, this.state.errors);
					
			delete errors[e.target.name];

			this.setState({

				errors,
				[e.target.name]: e.target.value

			});

		} else {
			
			this.setState({ 
				[e.target.name]: e.target.value 
			});
		}
	}

	validate = values => {
    	const errors = {};

    	if (!this.state.title) errors.title = "Can't be blank";

    	return errors;
  	};

  	
	render() {

	    const { title, errors, loading, redirect } = this.state;

	    console.log("props", this.props);

	  	const InlineError = ({ text }) => (
	  		<span style={{ color: "#ae5856" }}>{text}</span>
		);

		if (!this.props.info) {
			return <div>{ loading }</div>;
		}

		return (
			<div>
				<h1>Edit Record</h1>
				
				<Form onSubmit={ this.handleOnUpdate } loading={ loading }>
				<Form.Field error={ !!errors.title }>
					<label htmlFor="title">Title</label>
					<input 
					type="text" 
					name="title" 
					value={title}
					onChange={this.handleOnChange}
					/>
					{errors.title && <InlineError text={errors.title} />}
				</Form.Field>
				<Button primary>Save Changes</Button>
				</Form>
				{ redirect && (
					<Redirect to="/games" />
				)}
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	console.log("FormEdit state", state );
	console.log("FormEdit ownProps", ownProps );
	return { info: state.infos[ownProps.match.params._id] };
}

export default connect(mapStateToProps, { updateInfo, fetchSingleInfo })(FormEdit);