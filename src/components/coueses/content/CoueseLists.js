import React, { memo } from 'react';
import CourseList from './CourseList';

import style from './CourseLists.module.scss'

const CourseLists = memo(() => {
    return (
        <div className={style.courseLists}>
            <CourseList />
        </div>
    )
});

export default CourseLists;