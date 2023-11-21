// this is our redux store
import {compose, legacy_createStore as createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

// middlewares catches actions before the reducers are hit.
const middleWares = [logger]; //we can add multiple middlewares here
const composedEnhancers = compose(applyMiddleware(...middleWares));

// we need root reducer in order to generate the store.
export const store = createStore(rootReducer, undefined, composedEnhancers);