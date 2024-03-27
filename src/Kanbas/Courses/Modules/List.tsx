import React, {useEffect, useState} from "react";
import "./index.css";
import {FaEllipsisV, FaCheckCircle, FaPlusCircle} from "react-icons/fa";
import {useParams} from "react-router";
import {useSelector, useDispatch} from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./reducer";
import {KanbasState} from "../../store";
import * as client from "./client";

function ModuleList() {
  const {courseId} = useParams();
  useEffect(() => {
    if (courseId) {
      client.findModulesForCourse(courseId)
      .then((modules) =>
          dispatch(setModules(modules))
      );
    }
  }, [courseId]);
  const handleAddModule = () => {
    if (courseId) {
      client.createModule(courseId, module).then((module) => {
        dispatch(addModule(module));
      });
    }
  };
  const handleDeleteModule = (moduleId: string) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };
  const moduleList = useSelector((state: KanbasState) =>
      state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) =>
      state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
      <>
        <div className="mb-2">
          <button className="btn btn-secondary">Collapse All</button>
          <button className="btn btn-secondary mx-2">View Progress</button>
          <select id="publish">
            <option>Publish All</option>
          </select>
          <button className="btn bg-danger text-white mx-2">+ Module</button>
        </div>
        <ul className="list-group wd-modules">
          <li className="list-group-item">
            <div className="text-center d-flex flex-column">
              <div className="my-1">
                <input
                    className="w-100"
                    value={module.name}
                    onChange={(e) =>
                        dispatch(setModule({...module, name: e.target.value}))
                    }/>
              </div>
              <div className="flex-grow-1">
                <textarea
                    className="w-100"
                    value={module.description}
                    onChange={(e) =>
                        dispatch(setModule({...module, description: e.target.value}))
                    }/>
              </div>
              <div>
                <button
                    className="btn btn-success p-1 px-2 rounded mx-2"
                    onClick={handleAddModule}>Add
                </button>
                <button
                    className="btn btn-primary p-1 px-2 rounded"
                    onClick={handleUpdateModule}>Update
                </button>
              </div>
            </div>

          </li>
          {moduleList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
              <li key={index} className="list-group-item">
                <div>
                  <FaEllipsisV className="me-2"/>
                  {module.name}
                  <button
                      className="btn btn-dark rounded px-1 ms-3 me-1"
                      onClick={() => dispatch(setModule(module))}>
                    Edit
                  </button>
                  <button
                      className="btn btn-danger rounded px-1"
                      onClick={() => handleDeleteModule(module._id)}>
                    Delete
                  </button>
                  <span className="float-end">
                <FaCheckCircle className="text-success"/>
                <FaPlusCircle className="ms-2"/>
                <FaEllipsisV className="ms-2"/>
              </span>
                </div>
                <ul className="list-group">
                  {module.lessons?.map((lesson: { name: string }, index: number) => (
                      <li className="list-group-item" key={index}>
                        <FaEllipsisV className="me-2"/>
                        {lesson.name}
                        <span className="float-end">
                      <FaCheckCircle className="text-success"/>
                      <FaEllipsisV className="ms-2"/>
                    </span>
                      </li>
                  ))}
                </ul>
              </li>
          ))}
        </ul>
      </>
  );
}

export default ModuleList;