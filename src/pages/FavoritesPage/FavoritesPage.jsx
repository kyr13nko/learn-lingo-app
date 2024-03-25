import { useSelector } from "react-redux";

import { selectFavorites } from "../../store/favorites/favoritesSelectors";
import TeachersList from "../../components/Teachers/TeachersList/TeachersList";

import { Container, Section } from "../../styles/GlobalStyles";

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);
  return (
    <Container>
      <Section>
        {favorites.length === 0 ? <div>No Data</div> : <TeachersList teachers={favorites} />}
      </Section>
    </Container>
  );
};

export default FavoritesPage;
