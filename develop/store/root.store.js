import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/root.reducer';

const loggerMiddleware = createLogger();
const devToolMiddleware = window.devToolsExtension && window.devToolsExtension();

const developMiddleware = process.env.NODE_ENV !== 'production'
    ? [loggerMiddleware]
    : [];

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    ...developMiddleware
)(createStore);

function configureStore(initialState) {
    const store = createStoreWithMiddleware(
        rootReducer,
        initialState,
        devToolMiddleware
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers/root.reducer.js', () => {
            store.replaceReducer(rootReducer);
        });
    }

    return store;
}

const initialState = {};
const store = configureStore(initialState);

export default store;
