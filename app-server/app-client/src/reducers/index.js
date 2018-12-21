import { combineReducers } from 'redux';
import infosReducer from './infosReducer';

export default combineReducers({
	infos: infosReducer
});

