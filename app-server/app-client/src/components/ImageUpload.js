import axios from 'axios';
import React, { Component } from 'react';

class ImageUpload extends Component {
	state = {
		file: null
	};

	fileSelectedHandler = event => {

		// console.log("event.target", event.target.files[0].name );

		let file = event.target.files[0];

		console.log("file", file );

		this.setState({
			file: event.target.files[0]
		});

		// let data = new FormData();

		// data.append("file", this.state.file);

		// console.log("data", data );

		// console.log("state", this.state.file );

		// axios.post('/api/images', data)
		// 	.then(res => {
		// 		console.log( res );
		// 	});
	}

	fileUploadHandler = () => {

		const fd = new FormData();
	
		fd.append("image", this.state.file, this.state.file.name);
	
		try {
			const res = axios.post('/api/images', fd);

			console.log("api images", res.data );

		} catch(err) {

			console.log( err );
		}
		
	}

	renderForm() {
		return (
			<div>
				<input type="file" onChange={this.fileSelectedHandler} />
				<button onClick={this.fileUploadHandler}>Upload</button>
			</div>
		);
	}

	render() {
		return (
			<div>
				<h2>Upload Image</h2>
				{this.renderForm()}
			</div>

		); 
	}
}

export default ImageUpload;