import axios from 'axios';
import { FETCH_ALL_INFOS } from './types';
import { FETCHED_INFO } from './types';
import { ADD_INFO } from './types';
import { INFO_UPDATED } from './types';
import { INFO_DELETED } from './types';

export const fetchInfos = () => async dispatch => {

	try {
		const res = await axios.get('/api/games');
			
			dispatch({ 
				type: FETCH_ALL_INFOS, 
				payload: res.data 
			});

	} catch(err) {	

		console.log( err );
	}
}

export const fetchSingleInfo = (id) => async dispatch => {

	try {
		const res = await axios.get(`/api/games/${id}`);

			dispatch({ 
				type: FETCHED_INFO, 
				payload: res.data 
			});

	} catch(err) {

		console.log( err );
	};
}

export const createInfo = (values) => async dispatch => {

	try {
		const res = await axios.post('/api/games', values);

			dispatch({ 
				type: ADD_INFO, 
				payload: res.data 
			});

	} catch(err) {

		console.log( err );
	}
}

export const deleteInfo = (id) => async dispatch => {

	try {
		await axios.delete(`/api/games/${id}`);

			dispatch({ 
				type: INFO_DELETED, 
				payload: id
			});

	} catch(err) {

		console.log( err );
	}
}

export const updateInfo = (data) => async dispatch => {
		
	try {
		
		await axios.put(`/api/games/${data._id}`, {
			data: data,
			headers: {
		    	"Content-Type": "application/json"
		    }
	 	});

			dispatch({
				type: INFO_UPDATED,
				payload: data
			});

	} catch(err) {

		console.log( err );
	}
}



