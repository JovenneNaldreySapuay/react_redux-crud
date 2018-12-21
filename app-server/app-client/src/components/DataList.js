import _ from 'lodash';
import React from 'react';
import DataCard from './DataCard';
		
const DataList = ({ infos, deleteInfo }) => {

	const emptyMessage = (
		<h3>There are no infos yet in your list.</h3>
	);
	
	console.log("DataList", infos );
	
	const dataList = (
		<div className="ui four cards">
	   		{ _.map(infos, info => ( 
	   			<DataCard info={info} key={info._id} deleteInfo={deleteInfo} />
	   		  )
	   		)} 
		</div>
	);

	return (
		<div>		 	
		  { Object.keys(infos).length === 0 ? emptyMessage : dataList }
		</div>
	); 	
};

export default DataList;
