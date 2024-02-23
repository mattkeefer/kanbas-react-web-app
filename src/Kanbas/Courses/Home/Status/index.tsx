import {
  FaBullhorn, FaCalendar, FaCalendarAlt,
  FaChartBar,
  FaChartLine,
  FaCodiepie,
  FaFile,
  FaFileImport, FaHome, FaRegBell, FaRegCalendarAlt
} from "react-icons/fa";

function Status() {
  return (
      <div>
        <h3>Course Status</h3>
        <div className="d-flex">
          <button className="btn btn-secondary btn-sm me-1"><i className="fa fa-ban"></i> Unpublish
          </button>
          <button className="btn btn-success btn-sm" disabled><i
              className="fa fa-check-circle"></i> Published
          </button>
        </div>
        <ul className="wd-course-status list-group mt-2">
          <li className="list-group-item">
            <a href="#"><FaFileImport/> Import Existing Content</a>
          </li>
          <li className="list-group-item">
            <a href="#"><FaCodiepie/> Import From Commons</a>
          </li>
          <li className="list-group-item">
            <a href="#"><FaHome/> Choose Home Page</a>
          </li>
          <li className="list-group-item">
            <a href="#"><FaChartBar/> View Course Stream</a>
          </li>
          <li className="list-group-item">
            <a href="#"><FaBullhorn/> New Announcement</a>
          </li>
          <li className="list-group-item">
            <a href="#"><FaChartLine/> New Analytics</a>
          </li>
          <li className="list-group-item">
            <a href="#"><FaRegBell/> View Course Notifications</a>
          </li>
        </ul>
        <div className="mt-3 d-flex justify-content-between wd-coming-up">
          <h6>Coming Up</h6>
          <div>
            <FaCalendarAlt style={{color: 'red'}}/>
            <a className="wd-red-link" href="#"> View Calendar</a>
          </div>
        </div>
        <ul className="wd-coming-up list-group">
          <li className="list-group-item">
            <FaRegCalendarAlt style={{color: 'red'}}/>
            <a className="wd-red-link" href="#"> Lecture</a>
            <br/>CS4550.12631.202410<br/>Sep 7 at 11:45am
          </li>
          <li className="list-group-item">
            <FaRegCalendarAlt style={{color: 'red'}}/>
            <a className="wd-red-link" href="#"> Lecture</a>
            <br/>CS4550.12631.202410<br/>Sep 11 at 11:45am
          </li>
          <li className="list-group-item">
            <FaRegCalendarAlt style={{color: 'red'}}/>
            <a className="wd-red-link" href="#"> CS5610 06 SP23 Lecture</a>
            <br/>Sep 11 at 6pm
          </li>
        </ul>
      </div>
  );
}

export default Status;