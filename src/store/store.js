// this is our redux store
import {compose, legacy_createStore as createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

// middlewares catches actions before the reducers are hit.
const middleWares = [logger]; //we can add multiple middlewares here
const composedEnhancers = compose(applyMiddleware(...middleWares));

// we need root reducer in order to generate the store.
export const store = createStore(rootReducer, undefined, composedEnhancers);

// custom redux logger
// const loggerMiddleware = (store) => (next) => (action) => {
//     if(!action.type){
//         return next(action);
//     }
//     console.log('type: ', action.type);
//     console.log('payload: ', action.payload);
//     console.log('currentState: ', store.getState());

//     next(action);
//     console.log('next state: ',store.getState());
// }