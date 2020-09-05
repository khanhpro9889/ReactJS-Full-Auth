import ProfileReducer from './Profile/ProfileReducer';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const allReducers = combineReducers({
    ProfileReducer
})

const store = createStore(allReducers, applyMiddleware(thunk));

export default store;