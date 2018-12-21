import _ from 'lodash';
import { 
	FETCH_ALL_INFOS,
	INFO_DELETED,
	FETCHED_INFO,
	INFO_UPDATED,
	ADD_INFO 
} from '../actions/types';

const initialState = {};

export default function(state = initialState, action) {

	switch (action.type) {
		case ADD_INFO: 			
			return { ...state, [action.payload._id]: action.payload };
		case FETCH_ALL_INFOS:
			return { ...state, ..._.mapKeys(action.payload, '_id') };
		case INFO_UPDATED: 
			return { ...state, [action.payload._id]: action.payload };
	    case INFO_DELETED: 
			return _.omit(state, action.payload);
		case FETCHED_INFO:
	    	return { ...state, [action.payload.info._id]: action.payload.info };
		default:
			return state;
	}
}
