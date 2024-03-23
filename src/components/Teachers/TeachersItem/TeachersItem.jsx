const TeachersItem = ({ teacher }) => {
  return (
    <li>
      <span>{teacher.name}</span>
      <span>{teacher.surname}</span>
    </li>
  );
};

export default TeachersItem;
