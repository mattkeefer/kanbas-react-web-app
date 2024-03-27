import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;

function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });
  const [module, setModule] = useState({
    id: '1',
    name: 'Robotics Systems',
    description: 'Create autonomous robot systems using machine learning',
    course: 'CS4610'
  });
  const ASSIGNMENT_URL = `${API_BASE}/a5/assignment`;
  const MODULE_URL = `${API_BASE}/a5/module`;
  const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios
    .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);

  return (
      <div>
        <h3>Working With Objects</h3>
        <h3>Modifying Properties</h3>
        <input onChange={(e) => setAssignment({
          ...assignment, title: e.target.value })}
               value={assignment.title} type="text" />
        <button onClick={updateTitle} >
          Update Title to: {assignment.title}
        </button>
        <button onClick={fetchAssignment} >
          Fetch Assignment
        </button>
        <h4>Modifying Properties</h4>
        <a className="btn btn-primary m-2" href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
          Update Assignment Title
        </a>
        <input type="text"
               onChange={(e) => setAssignment({
                 ...assignment,
                 title: e.target.value
               })}
               value={assignment.title}/>
        <br/>
        <a className="btn btn-primary m-2" href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>
          Update Assignment Score
        </a>
        <input type="number"
               onChange={(e) => setAssignment({
                 ...assignment,
                 score: parseInt(e.target.value)
               })}
               value={assignment.score}/>
        <br/>
        <a className="btn btn-primary m-2" href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>
          Update Assignment Completeness
        </a>
        <input type="checkbox"
               onChange={(e) => setAssignment({
                 ...assignment,
                 completed: e.target.checked
               })}
               checked={assignment.completed}/>
        <br/>
        <a className="btn btn-secondary m-2" href={`${MODULE_URL}/name/${module.name}`}>
          Update Module Name
        </a>
        <input type="text"
               onChange={(e) => setModule({
                 ...module,
                 name: e.target.value
               })}
               value={module.name}/>
        <br/>
        <a className="btn btn-secondary m-2" href={`${MODULE_URL}/description/${module.description}`}>
          Update Module Description
        </a>
        <input type="text"
               onChange={(e) => setModule({
                 ...module,
                 description: e.target.value
               })}
               value={module.description}/>
        <h4>Retrieving Objects</h4>
        <a className="btn btn-primary m-2" href="http://localhost:4000/a5/assignment">
          Get Assignment
        </a>
        <br/>
        <a className="btn btn-secondary m-2" href="http://localhost:4000/a5/module">
          Get Module
        </a>
        <h4>Retrieving Properties</h4>
        <a className="btn btn-primary m-2" href="http://localhost:4000/a5/assignment/title">
          Get Assignment Title
        </a>
        <br/>
        <a className="btn btn-secondary m-2" href="http://localhost:4000/a5/module/name">
          Get Module Name
        </a>
      </div>
  );
}

export default WorkingWithObjects;