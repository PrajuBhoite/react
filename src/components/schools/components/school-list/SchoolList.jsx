import { SchoolItem } from "../school-item/SchoolItem";

export const SchoolList = ({ schools, handleSchoolDelete }) => {
  const onSchoolDelete = (schoolId) => {
    handleSchoolDelete(schoolId);
  };
  return (
    <ul className="school-list">
      {schools.map((school) => (
        <SchoolItem school={school} key={school._id} onShoolDelete={onSchoolDelete} />
      ))}
    </ul>
  );
};
