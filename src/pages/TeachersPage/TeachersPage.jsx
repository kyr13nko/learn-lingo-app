import { useEffect } from "react";
import TeachersList from "../../components/Teachers/TeachersList/TeachersList";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeachers } from "../../store/teachers/teachersOperations";
import { selectTeachers } from "../../store/teachers/teachersSelectors";
import { Container, Section } from "../../styles/GlobalStyles";
import Filter from "../../components/Filter/Filter";
import { selectFilteredTeachers, selectIsFiltered } from "../../store/filter/filterSelectors";
import { resetFilter } from "../../store/filter/filterSlice";

const TeachersPage = () => {
  const dispatch = useDispatch();

  const isFiltered = useSelector(selectIsFiltered);
  const filteredTeachers = useSelector(selectFilteredTeachers);

  useEffect(() => {
    dispatch(fetchTeachers());
    dispatch(resetFilter());
  }, [dispatch]);

  const teachers = useSelector(selectTeachers);
  return (
    <Container>
      <Section>
        <Filter teachers={teachers} />
        {isFiltered && filteredTeachers.length === 0 ? (
          <div>No Results</div>
        ) : (
          <TeachersList teachers={isFiltered ? filteredTeachers : teachers} />
        )}
      </Section>
    </Container>
  );
};

export default TeachersPage;
