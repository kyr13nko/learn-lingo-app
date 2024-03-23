import { useEffect } from "react";
import TeachersList from "../../components/Teachers/TeachersList/TeachersList";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeachers } from "../../store/teachers/teachersOperations";
import { selectTeachers } from "../../store/teachers/teachersSelectors";

const TeachersPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  const teachers = useSelector(selectTeachers);
  return (
    <>
      <TeachersList teachers={teachers} />
    </>
  );
};

export default TeachersPage;
