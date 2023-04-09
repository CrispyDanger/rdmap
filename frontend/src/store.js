import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage,

}

const persistedReducer = persistReducer(persistConfig, rootReducer)



const initialState = {};

const MiddleWare = [thunk];

export const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...MiddleWare))
);


export const persistor = persistStore(store);
