import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectFilteredTeachers, selectIsFiltered } from "../../store/filter/filterSelectors";
import { fetchTeachers } from "../../store/teachers/teachersOperations";
import { selectLoading, selectTeachers } from "../../store/teachers/teachersSelectors";
import { pageLocation, resetFilter } from "../../store/filter/filterSlice";

import TeachersList from "../../components/Teachers/TeachersList/TeachersList";
import Filter from "../../components/Filter/Filter";

import { Container, Section } from "../../styles/GlobalStyles";

const TeachersPage = () => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const isFiltered = useSelector(selectIsFiltered);
  const filteredTeachers = useSelector(selectFilteredTeachers);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchTeachers(currentPage));
    dispatch(resetFilter());
    dispatch(pageLocation("teachers"));
  }, [dispatch, currentPage]);

  const teachers = useSelector(selectTeachers);

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  const isEndOfTeachers = teachers.length % 4 !== 0;

  return (
    <Container>
      <Section>
        <Filter teachers={teachers} page={"teachersPage"} />
        {isFiltered && filteredTeachers.length === 0 ? (
          <div>No Results</div>
        ) : (
          <TeachersList teachers={isFiltered ? filteredTeachers : teachers} />
        )}
        {!loading && !isEndOfTeachers && !isFiltered && (
          <button type="button" onClick={handleLoadMore}>
            Load more
          </button>
        )}
      </Section>
    </Container>
  );
};

export default TeachersPage;
