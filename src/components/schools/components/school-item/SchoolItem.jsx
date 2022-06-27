import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

export const SchoolItem = ({ school, onSchoolDelete }) => {
  const handleSchoolDelete = () => {
    onSchoolDelete(school._id);
  };
  return (
    <li
      key={school._id}
      className={`school-item ${school.isCompleted ? "school-item--completed" : ""}`}
    >
      <div className="school-content">
      {school.schoolname}
      </div>
      <div className="school-action">
        <Link to={"/schools/" + school._id}>
          <FontAwesomeIcon icon={faPen} />
        </Link>
        <button onClick={handleSchoolDelete} className="btn-delete">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
};
