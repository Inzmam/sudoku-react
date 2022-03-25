import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';

const middleWares = [reduxThunk, logger];
const store = createStore(rootReducer, applyMiddleware(...middleWares));

export default store;
