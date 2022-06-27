import React from "react";
import { connect } from "react-redux";
import { loginStart } from "../../store/auth/slice";
import { Timer } from "../timer/Timer";


class GreetComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      timer: null,
      timer2: null,
      timer3: null,
      timer4: null,
    };
    this.anotherproperty = "somevalue";
    this.headingRef = React.createRef();
  }

  updateAnotherProperty = () => {
    console.log(this.headingRef.current);
    this.anotherproperty = "some another value";
    // this.state = { timer: new Date().toISOString() }
    this.setState({
      timer: new Date().toISOString(),
      timer2: new Date().toISOString(),
    });
  }

  render() {
    console.log("render method");
    return (
      <>
        <h1 ref={this.headingRef}>Hello. Thank you for Visiting{this.props.name}</h1>
        <p>{this.props.isLoading ? 'Is Loading' : 'Not loading'}</p>
        <Timer timer={this.state.timer} />
        <button onClick={this.updateAnotherProperty}>Click Me!</button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.auth.loading
})

const mapDispatchToProps = (dispatch) => ({
  loginStart: () => dispatch(loginStart()),
});

// const connectComp = connect(mapStateToProps, mapDispatchToProps);
// export const Greet = connectComp(GreetComponent);
export const Greet = connect(mapStateToProps, mapDispatchToProps)(GreetComponent);
// export const Greet = GreetComponent;


// import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";
// //import { Navigate } from "react-router-dom";


// export const Showschoollist = () => {

//   const [school, setSchool] = useState([]);

//   const handleonSubmit = (e) => {
//     e.preventDefault();
//   }

//   useEffect(() => {
//     const token = localStorage.getItem("accessToken");
//     axios
//       .get("http://localhost:3001/api/schools", {
//         headers: {
//           authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         const schools= response.data.data.schools;
//         setSchool(schools);

//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);


// const onDelete=(id) => {
//   const token = localStorage.getItem("accessToken");
//   //console.log(id);
//     axios.delete(`http://localhost:3001/api/schools/${id}`, {
//         headers: {
//           authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         if(response.data.success){
//           const filter=school.filter(({_id})=> _id !==id)
//           setSchool(filter)
//         }

// })
// }

//   return (
//     <div className='school'>
//       <div className="schools_header">
//         <h1 className='page-title'>You will Get All Schoolslist Here..!</h1>
//       </div>
//       <div className="schools_footer">
//         <form className='school-form spaced-form'
//           onSubmit={(e) => handleonSubmit(e)}

//         >

//           <div className='map' >
//             {school.map((school) => (

//               <li key={school._id}>
//                 <h3>{school.schoolname}</h3>
//                 <h4>{school.tagline}</h4>
//                 <div>
//                   <h5>Address:{school.Address}</h5>
//                   <p>city :{school.city}</p>
//                   <p>pincode:{school.pincode}</p>
//                   <p>mobile:{school.mobile}</p>
//                   </div>
//                 <span>
//                   <button className='btn-btn-delete' 
//                   onClick={()=> onDelete(school._id)}
//                   >Delete</button>
//                   </span>
//               </li>
//             ))}
//           </div>

//           <div className="input-group">
//             <button type='submit' className='btn btn-primary'
//               onClick={handleonSubmit} >
//               All schools
//             </button>
//           </div>
//         </form>
//       </div>
//     </div >
//   )
// }