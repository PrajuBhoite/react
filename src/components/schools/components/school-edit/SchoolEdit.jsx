import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export const SchoolEdit = () => {
  const navigate = useNavigate();
  const [school, setSchool] = useState({ school: "" });
  const { id: schoolId } = useParams();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    axios
      .get(`http://localhost:3001/api/schools/${schoolId}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.success) {
          setSchool(response.data.data.school);
        }
      })
      .catch((error) => console.error(error));
  }, [schoolId]);

  const handleTodoEdit = (e) => {
    e.preventDefault();
    if (school.school.trim().length === 0) {
      return;
    }
    const token = localStorage.getItem("accessToken");
    axios
      .put(`http://localhost:3001/api/schools/${school._id}`, school, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.success) {
          navigate("/schools");
        }
      })
      .catch((error) => console.error(error));
  };

  const handleOnChange = (e) => {
    setSchool({ ...school, [e.target.name]: e.target.value });
  };

  return (
    <form className="school-form spaced-form" onSubmit={handleTodoEdit}>
      <div className="input-group">
        <label htmlFor="school">Enter your school name</label>
        <input
          type="text"
          name="school"
          id="school"
          placeholder="Enter your school name"
          className="input-control"
          value={school.school}
          onChange={handleOnChange}
        />
      </div>
      <div className="input-group">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};
