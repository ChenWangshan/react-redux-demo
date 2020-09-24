import {
    combineReducers
} from 'redux-immutable';

import course from './course';


const shapes = {
    course
};

const actionCreatorsSet = {};
const reducers = {};
const sagas = [];

Object.keys(shapes).forEach((shapeName) => {
    const {
        reducer,
        saga,
        actionCreators
    } = shapes[shapeName];
    actionCreatorsSet[shapeName] = actionCreators;

    if (reducer) {
        reducers[shapeName] = reducer;
    }

    if (saga) {
        sagas.push(saga);
    }
});

function* rootSaga() {
    for (let s = 0; s < sagas.length; s++) {
        const saga = sagas[s];
        yield* saga();
    }
}

const rootReducer = combineReducers(reducers);

export default {
    actionCreators: actionCreatorsSet,
    rootReducer,
    rootSaga
};