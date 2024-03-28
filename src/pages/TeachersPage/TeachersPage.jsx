import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectFilteredTeachers, selectIsFiltered } from "../../store/filter/filterSelectors";
import { fetchTeachers } from "../../store/teachers/teachersOperations";
import { selectTeachers } from "../../store/teachers/teachersSelectors";
import { pageLocation, resetFilter } from "../../store/filter/filterSlice";

import TeachersList from "../../components/Teachers/TeachersList/TeachersList";
import Filter from "../../components/Filter/Filter";

import { Container, Section } from "../../styles/GlobalStyles";

const TeachersPage = () => {
  const dispatch = useDispatch();

  const isFiltered = useSelector(selectIsFiltered);
  const filteredTeachers = useSelector(selectFilteredTeachers);

  useEffect(() => {
    dispatch(fetchTeachers());
    dispatch(resetFilter());
    dispatch(pageLocation("teachers"));
  }, [dispatch]);

  const teachers = useSelector(selectTeachers);
  return (
    <Container>
      <Section>
        <Filter teachers={teachers} page={"teachersPage"} />
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
