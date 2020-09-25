import { fromJS } from 'immutable';
import {
    ADD_COURSE_REDUX,
    DELETE_COURSE_REDUX,
} from './actionTypes';
import preloadedState from '../../store/preloadedState';

const defaultSidebar = preloadedState.get('courses');

function reducer(state = defaultSidebar, action) {
    const { type, payload } = action;
    let newState;
    switch (type) {
        // 子图层加载状态
        case ADD_COURSE_REDUX:
            const { layersLoading, errorLoading } = payload;
            newState = state.set('layersLoading', layersLoading);
            newState = newState.set('errorLoading', errorLoading);
            return newState;

        // 服务子图层更新
        case DELETE_COURSE_REDUX:
            newState = state.set('existLayers', fromJS(payload));
            return newState;
        default:
            return state;
    }
}

export default reducer;