import IconButton from "../common/icon-button/iconbutton";
import "./style.css";
const Content = () => {
    const addCity =()=>{
        console.log("add a city")
    }
  return (
    <div className="main-content">
      <div className="main-wrapper">
        <div className="left-card">
          <div className="card-header">
            <div>Cities</div>
            <div className="add-btn"><IconButton handleClick={addCity} data={"add_circle"}/></div>
          </div>
          <div className="card-container">
            <div className="no-city">You have not selected any city.</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;
