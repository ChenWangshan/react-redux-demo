
import { makeActionCreator } from '../util';
import {
    ADD_COURSE_REDUX,
    DELETE_COURSE_REDUX
} from './actionTypes';

export default {
    addCourse: makeActionCreator(ADD_COURSE_REDUX),
    deleteCourse: makeActionCreator(DELETE_COURSE_REDUX)
}