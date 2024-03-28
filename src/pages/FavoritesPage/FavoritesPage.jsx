import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { pageLocation, resetFilter } from "../../store/filter/filterSlice";
import { selectFavorites } from "../../store/favorites/favoritesSelectors";
import { selectFilteredTeachers, selectIsFiltered } from "../../store/filter/filterSelectors";

import TeachersList from "../../components/Teachers/TeachersList/TeachersList";
import Filter from "../../components/Filter/Filter";

import { Container, Section } from "../../styles/GlobalStyles";

const FavoritesPage = () => {
  const dispatch = useDispatch();

  const favorites = useSelector(selectFavorites);
  const isFiltered = useSelector(selectIsFiltered);
  const filteredTeachers = useSelector(selectFilteredTeachers);

  useEffect(() => {
    dispatch(resetFilter());
    dispatch(pageLocation("favorites"));
  }, []);

  return (
    <Container>
      <Section>
        <Filter teachers={favorites} />
        {favorites.length === 0 ? (
          <div>No Data</div>
        ) : isFiltered && filteredTeachers.length === 0 ? (
          <div>No Results</div>
        ) : (
          <TeachersList teachers={isFiltered ? filteredTeachers : favorites} />
        )}
      </Section>
    </Container>
  );
};

export default FavoritesPage;
