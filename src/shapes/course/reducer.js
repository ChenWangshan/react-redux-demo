import { fromJS } from 'immutable';
import {
    UPDATE_THIRDSERVICE_LAYERS_REDUX,
    UPDATE_THIRDSERVICE_LOADING_REDUX,
    UPDATE_THIRDSERVICE_SERVICETYPE_REDUX
} from './actionTypes';
import preloadedState from '../../store/preloadedState';

const defaultSidebar = preloadedState.get('thirdService');

function reducer(state = defaultSidebar, action) {
    const { type, payload } = action;
    let newState;
    switch (type) {
        // 子图层加载状态
        case UPDATE_THIRDSERVICE_LOADING_REDUX:
            const { layersLoading, errorLoading } = payload;
            newState = state.set('layersLoading', layersLoading);
            newState = newState.set('errorLoading', errorLoading);
            return newState;

        // 服务子图层更新
        case UPDATE_THIRDSERVICE_LAYERS_REDUX:
            newState = state.set('existLayers', fromJS(payload));
            return newState;

        // 服务类型更新
        case UPDATE_THIRDSERVICE_SERVICETYPE_REDUX:
            newState = state.set('serviceType', fromJS(payload));
            return newState;
        default:
            return state;
    }
}

export default reducer;