import {Link, Navigate} from "react-router-dom";
import Nav from "../Nav";
import KanbasNavigation from "./Navigation";
import {Route, Routes} from "react-router";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

function Kanbas() {
  return (
      <div className="d-flex">
        <KanbasNavigation/>
        <div style={{flexGrow: 1}}>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard"/>}/>
            <Route path="Account" element={<h1>Account</h1>}/>
            <Route path="Dashboard" element={<Dashboard/>}/>
            <Route path="Courses/:courseId/*" element={<Courses/>}/>
            <Route path="Calendar" element={<h1>Calendar</h1>}/>
          </Routes>
        </div>
      </div>

  );
}

export default Kanbas;