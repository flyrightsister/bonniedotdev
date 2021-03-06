import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { courseDetails } from 'Constants/itemConstants';
import useCourses from 'Hooks/GetData/useCourses';
import useSelector from 'Hooks/useTypedSelector';
import PageTitleWithAdd from 'Pages/Common/PageTitleWithAdd';
import React, { ReactElement, useCallback, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Course as CourseType } from 'Types';

import Course from './Course';
import EditCourseFields from './EditCourseFields';

// eslint-disable-next-line max-lines-per-function
export default function Courses(): ReactElement {
  const user = useSelector((state) => state.user);
  const courses = useCourses();

  const mapCourseToElement = useCallback((courseData: CourseType) => {
    return <Course key={courseData.id} courseData={courseData} />;
  }, []);

  const coursePage = useMemo(
    () => (
      <>
        <Helmet>
          <title>Bonnie Schulkin | Courses</title>
          <meta
            name="description"
            content="Bonnie's online courses and coupons"
          />
        </Helmet>
        <PageTitleWithAdd
          title="Courses"
          itemDetails={courseDetails}
          ItemFieldsComponent={<EditCourseFields />}
        />
        <Grid container spacing={3}>
          {courses.map(mapCourseToElement)}
        </Grid>
      </>
    ),
    [courses, mapCourseToElement],
  );

  return user ? (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      {coursePage}
    </MuiPickersUtilsProvider>
  ) : (
    coursePage
  );
}
