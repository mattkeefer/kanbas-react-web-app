import ModuleList from "../Modules/List";
import "./index.css"
import Status from "./Status";

function Home() {
  return (
      <div>
        <h2>Home</h2>
        <div className="d-flex justify-content-between">
          <div className="flex-fill me-2">
            <ModuleList/>
          </div>
          <div className="flex-grow-0 me-2 d-none d-lg-block" style={{width: 250}}>
            <Status/>
          </div>
        </div>
      </div>
  );
}

export default Home;