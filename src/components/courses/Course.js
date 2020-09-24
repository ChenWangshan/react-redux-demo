import React, { memo } from 'react';
import CourseAdd from './content/CourseAdd';
import CourseLists from './content/CoueseLists';

import style from './Course.module.scss';

const Course = memo(() => {
    return (
        <div className={style.course}>
            <CourseAdd />
            <CourseLists />
        </div>
    )
});

export default Course;