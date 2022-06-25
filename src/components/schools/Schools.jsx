import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { SchoolList } from "./components/school-list/SchoolList";
import "./Schools.css";

export const Schools= () => {
  const schoolRef = useRef();
  const [schoolItem, setSchoolItem] = useState("");
  const [schools, setSchools] = useState([]);

  const handleSchoolSubmit = (e) => {
    e.preventDefault();
    if (schoolItem.trim().length === 0) {
      console.error("Empty school is not allowed");
      return;
    }
    const token = localStorage.getItem("accessToken");
    axios
      .post(
        "http://localhost:3001/api/schools",
        { school: schoolItem },
        {
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        if (response.data.success) {
          const school = response.data.data.school;
          setSchools([...schools, school]);
        }
      })
      .catch((error) => console.error(error));
    setSchoolItem("");
  };

  const updateSchoolItemData = (e) => {
    setSchoolItem(e.target.value);
  };

  const handleSchoolDelete = (schoolId) => {
    const token = localStorage.getItem("accessToken");
    axios
      .delete(`http://localhost:3001/api/schools/${schoolId}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.success) {
          const filteredSchools = schools.filter(({ _id }) => _id !== schoolId);
          setSchools(filteredSchools);
        }
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    axios
      .get("http://localhost:3001/api/schools", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const schools = response.data.data.schools;
        setSchools(schools);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="schools">
      <div className="schools__header">
        <h1 className="page-title">Schools</h1>
      </div>
      <div className="schools__body">
        <SchoolList schools={schools} handleSchoolDelete={handleSchoolDelete} />
      </div>
      <div className="schools__footer">
        <form
          className="school-form spaced-form"
          onSubmit={handleSchoolSubmit}
          ref={schoolRef}
        >
          <div className="input-group">
            <label htmlFor="todo">What you want to do?</label>
            <input
              type="text"
              name="school"
              id="school"
              placeholder="What you want to do?"
              className="input-control"
              value={schoolItem}
              onChange={updateSchoolItemData}
            />
          </div>
          <div className="input-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
