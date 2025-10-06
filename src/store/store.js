import { legacy_createStore  as createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { thunk } from 'redux-thunk';

import productReducer from './products/reducer';
import uiReducer from './ui/reducer';

const rootReducer = combineReducers({
  // reducer
  product: productReducer,
  ui: uiReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;

