import React, { Component } from 'react';
import DataList from './DataList';
import { connect } from 'react-redux';
import { fetchInfos, deleteInfo } from '../actions';

class DataPage extends Component {
	
	componentDidMount() {
    	this.props.fetchInfos();
  	}

	render() {
		console.log("DataPage()", this.props.infos );
		
		return (
			<div>
				<DataList infos={this.props.infos} deleteInfo={this.props.deleteInfo} />
			</div>
		); 
	}
}

function mapStateToProps(state) {
	console.log("DataPage mapStateToProps:", state.infos );
	return {
		infos: state.infos	
	};
}

export default connect(mapStateToProps, { fetchInfos, deleteInfo })(DataPage);