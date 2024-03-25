import TeachersItem from "../TeachersItem/TeachersItem";
import { List } from "./TeachersList.styled";

const TeachersList = ({ teachers }) => {
  return (
    <List>
      {teachers.map((teacher) => (
        <TeachersItem key={teacher.avatar_url} teacher={teacher} />
      ))}
    </List>
  );
};

export default TeachersList;
