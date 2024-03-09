// this is our redux store
import {compose, legacy_createStore as createStore, applyMiddleware} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //saves store state into local storage
// import storageSession from 'redux-persist/lib/storage/session'; //save store state into session storage
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';
// import thunk from 'redux-thunk';  
//sagas replaces thunk, we mainly want one async sideeffect library either saga or thunk

/*Redux persist */
const persistConfig = { 
    key: 'root',
    storage: storage,
    whitelist: ['cart']
}
const persistedReducer = persistReducer(persistConfig,rootReducer);

const sagaMiddleware = createSagaMiddleware();

// middlewares catches actions before the reducers are hit.
const middleWares = [
    process.env.NODE_ENV === 'development' && logger, 
    sagaMiddleware
].filter(Boolean); //we can add multiple middlewares here

const composedEnhancer =
    (process.env.NODE_ENV !== 'production' && 
        window &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares));

// we need root reducer in order to generate the store.
export const store = createStore(
    persistedReducer, 
    undefined, 
    composedEnhancers
);

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);