import React from "react";
import {FaCheckCircle, FaEllipsisV, FaPlusCircle} from "react-icons/fa";
import {Link, useParams} from "react-router-dom";
import {assignments} from "../../Database";

function Assignments() {
  const {courseId} = useParams();
  const assignmentList = assignments.filter(
      (assignment) => assignment.course === courseId);
  return (
      <>
        <h2>Assignments</h2>
        <div className="d-flex">
          <input className="flex-grow-1 ms-1" type="text" placeholder="Search for Assignment"/>
          <button className="ms-1">+ Group</button>
          <button className="ms-1" style={{background: 'red', color: 'white'}}>+ Assignment</button>
          <button className="mx-1"><FaEllipsisV/></button>
        </div>
        <ul className="list-group wd-modules">
          <li className="list-group-item">
            <div>
              <FaEllipsisV className="me-2"/>ASSIGNMENTS
              <span className="float-end">
              <FaCheckCircle className="text-success"/>
              <FaPlusCircle className="ms-2"/><FaEllipsisV className="ms-2"/>
            </span>
            </div>
            <ul className="list-group">
              {assignmentList.map((assignment) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2"/>
                    <Link
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                    <span className="float-end">
                  <FaCheckCircle className="text-success"/><FaEllipsisV className="ms-2"/></span>
                  </li>))}
            </ul>
          </li>
        </ul>
      </>
  );
}

export default Assignments;