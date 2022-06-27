import { useState, useRef ,useEffect} from "react";
import axios from "axios";
import { SchoolList } from "./components/school-list/SchoolList";
import "./Schools.css";

export const Schools= () => {
  const schoolRef = useRef();
  const [schoolItem, setSchoolItem] = useState({schoolname:"",mobile:"",tagline:"",address:"",city:"",pincode:""});
  const [schools, setSchools] = useState([]);

  const updateSchoolItemData = (e) => {
   
    setSchoolItem(e.target.value)
    //({...schoolItem, [e.target.name] : e.target.value});
    
  };
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
     {school:schoolItem , },
      
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
          setSchoolItem({schoolname:"",tagline:"",address:"",city:"",pincode:"",mobile:""});
        }
      })
    .catch((error) => console.error(error));
  
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
        <h1 className="page-title">School Form</h1>
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
          <label htmlFor="schoolname">Enter Your School Name</label>
            <input
              type="text"
              name="schoolname"
              id="schoolname"
              placeholder="Enter Your School Name"
              className="input-control"
              value={schoolItem.schoolname}
              onChange={updateSchoolItemData}
            />
          </div>
          <div className="input-group">
          <label htmlFor="tagline">Enter Your School's Tagline</label>
            <input
              type="text"
              name="tagline"
              id="tagline"
              placeholder="Enter Your School's Tagline"
              className="input-control"
              value={schoolItem.tagline}
              onChange={updateSchoolItemData}
            />
          </div>
          <div className="input-group">
          <label htmlFor="address">Enter Your Address</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Enter Your Address"
              className="input-control"
              value={schoolItem.address}
              onChange={updateSchoolItemData}
            />
          </div>
          <div className="input-group">
          <label htmlFor="city">Enter Your City </label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="Enter Your City"
              className="input-control"
              value={schoolItem.city}
              onChange={updateSchoolItemData}
            />
          </div>
          
          <div className="input-group">
          <label htmlFor="pincode">Enter Your Pincode</label>
            <input
              type="text"
              name="pincode"
              id="pincode"
              placeholder="Enter Your Pincode"
              className="input-control"
              value={schoolItem.pincode}
              onChange={updateSchoolItemData}
            />
          </div>
          <div className="input-group">
          <label htmlFor="mobile">Enter Mobile Number</label>
            <input
              type="text"
              name="mobile"
              id="mobile"
              placeholder="Enter  Mobile Number "
              className="input-control"
              value={schoolItem.mobile}
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
