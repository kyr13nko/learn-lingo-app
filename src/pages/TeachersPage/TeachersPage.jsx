import { useEffect } from "react";
import TeachersList from "../../components/Teachers/TeachersList/TeachersList";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeachers } from "../../store/teachers/teachersOperations";
import { selectTeachers } from "../../store/teachers/teachersSelectors";
import { Container } from "../../styles/GlobalStyles";

const TeachersPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  const teachers = useSelector(selectTeachers);
  return (
    <Container>
      <TeachersList teachers={teachers} />
    </Container>
  );
};

export default TeachersPage;
