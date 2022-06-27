import { Routes, Route } from "react-router-dom";
import { Schools} from "../schools/Schools";
import { SchoolEdit } from "../schools/components/school-edit/SchoolEdit";
import { Greet} from "../greet/Greet";
import { Navbar } from "../common/navbar/Navbar";
import { SignIn } from "../sign-in/SignIn";
import { SignUp } from "../sign-up/SignUp";
import { useLocation } from 'react-router-dom';
import "./App.css";

//const useLocation =(useLocation)
const App = () => {
  let location = useLocation()
  console.log(location);
  return (
    <div className="app">
      <header className="header">
        <Navbar />
      </header>
   <main style={location.pathname==="/schools"?{backgroundImage:"url(https://image.shutterstock.com/image-vector/vector-illustration-school-building-260nw-553127521.jpg)"}
   :location.pathname==="/school"?{backgroundImage:"url(https://image.shutterstock.com/image-vector/vector-illustration-school-building-260nw-553127521.jpg)"}:
 location.pathname==="/greet"?{backgroundImage:"url(https://freedesignfile.com/upload/2012/08/School-1.jpg)"}:
   location.pathname==="/sign-in"?{backgroundImage:"url( https://th.bing.com/th/id/OIP.nJKzeL0UWtQm313eanqjZQHaHa?pid=ImgDet&rs=1)"}
   :location.pathname==="/sign-up"?{backgroundImage:"url(https://th.bing.com/th/id/OIP.vrqD39kJYa8TRhlvTPPC3AHaHa?pid=ImgDet&rs=1)"}
   :location.pathname==="/"?{backgroundImage:"url(https://static.vecteezy.com/system/resources/previews/000/346/494/original/vector-back-to-school-design-set-on-green-chalkboard-background.jpg)"}
:{}}className="main">
       
       
       
       
        <Routes>
          <Route path="/schools" element={<Schools/>} />
          <Route path="/schools/:id" element={<SchoolEdit />} />
          <Route path="/greet" element={<Greet />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<h1>Welcome</h1>} />
        </Routes>
      </main>
      </div>
   
       );
};

export default App;
