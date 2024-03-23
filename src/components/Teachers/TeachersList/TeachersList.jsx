import TeachersItem from "../TeachersItem/TeachersItem";

const TeachersList = ({ teachers }) => {
  return (
    <ul>
      {teachers.map((teacher) => (
        <TeachersItem key={teacher.avatar_url} teacher={teacher} />
      ))}
    </ul>
  );
};

export default TeachersList;
