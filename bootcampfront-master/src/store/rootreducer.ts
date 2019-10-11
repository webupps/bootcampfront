import { combineReducers } from 'redux'; //1
import counterReducer from './reducers/counter'; //3
import resultReducer from './reducers/result'; //3

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

export default rootReducer;