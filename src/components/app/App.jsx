import { Routes, Route } from "react-router-dom";
import { Schools} from "../schools/Schools";
import { SchoolEdit } from "../schools/components/school-edit/SchoolEdit";
import { Greet } from "../greet/Greet";
import { Navbar } from "../common/navbar/Navbar";
import { SignIn } from "../sign-in/SignIn";
import { SignUp } from "../sign-up/SignUp";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <Navbar />
      </header>
      <main className="main">
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
