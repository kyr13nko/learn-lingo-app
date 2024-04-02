import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectFilteredTeachers, selectIsFiltered } from "../../store/filter/filterSelectors";
import { fetchTeachers } from "../../store/teachers/teachersOperations";
import { selectLoading, selectTeachers } from "../../store/teachers/teachersSelectors";
import { pageLocation, resetFilter } from "../../store/filter/filterSlice";

import TeachersList from "../../components/Teachers/TeachersList/TeachersList";
import Filter from "../../components/Filter/Filter";
import ScrollUp from "../../components/ScrollUp/ScrollUp";

import { Container, Section } from "../../styles/GlobalStyles";
import { ButtonWrapper, LoadMoreButton } from "./TeachersPage.styled";

const TeachersPage = () => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const isFiltered = useSelector(selectIsFiltered);
  console.log("TeachersPage ---> isFiltered:", isFiltered);

  const filteredTeachers = useSelector(selectFilteredTeachers);

  const loading = useSelector(selectLoading);
  console.log("TeachersPage ---> loading:", loading);

  useEffect(() => {
    dispatch(pageLocation("teachers"));
    dispatch(fetchTeachers(currentPage));
    dispatch(resetFilter());
  }, [dispatch, currentPage]);

  const teachers = useSelector(selectTeachers);

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  const isEndOfTeachers = teachers.length % 4 !== 0;
  console.log("TeachersPage ---> isEndOfTeachers:", isEndOfTeachers);

  return (
    <Container>
      <Section>
        <Filter teachers={teachers} page={"teachersPage"} />
        {isFiltered && filteredTeachers.length === 0 ? (
          <div>No Results</div>
        ) : (
          <TeachersList teachers={isFiltered ? filteredTeachers : teachers} />
        )}
        <ButtonWrapper>
          {!loading && !isEndOfTeachers && !isFiltered && (
            <LoadMoreButton type="button" onClick={handleLoadMore}>
              Load more
            </LoadMoreButton>
          )}
        </ButtonWrapper>
        <ScrollUp />
      </Section>
    </Container>
  );
};

export default TeachersPage;
