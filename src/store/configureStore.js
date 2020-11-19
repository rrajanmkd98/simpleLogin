import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "../reducers/Reducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({});
const middlewares = [thunk];

// https://www.npmjs.com/package/redux-logger
if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);
    middlewares.push(logger);
}

export default function configureStore(){
    return createStore(rootReducer, composeEnhancers( applyMiddleware(...middlewares)));
}