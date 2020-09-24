import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';

import shapes from '../shapes';

import preloadedState from './preloadedState';

const { rootSaga, rootReducer } = shapes;

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);
    const store = createStore(rootReducer, preloadedState, composeWithDevTools((middlewareEnhancer)));
    sagaMiddleware.run(rootSaga);

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('../shapes', () => store.replaceReducer(rootReducer))
    }

    return store;
}