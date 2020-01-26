import { combineReducers } from 'redux';
import hotelReducer from './hotelreducer';

export default combineReducers({

    app : hotelReducer
});