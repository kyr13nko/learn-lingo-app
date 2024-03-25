import { useEffect } from "react";
import TeachersList from "../../components/Teachers/TeachersList/TeachersList";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeachers } from "../../store/teachers/teachersOperations";
import { selectTeachers } from "../../store/teachers/teachersSelectors";
import { Container, Section } from "../../styles/GlobalStyles";
import Filter from "../../components/Filter/Filter";

const TeachersPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  const teachers = useSelector(selectTeachers);
  return (
    <Container>
      <Section>
        <Filter teachers={teachers} />
        <TeachersList teachers={teachers} />
      </Section>
    </Container>
  );
};

export default TeachersPage;
