import { useState } from "react";
import IconButton from "../common/icon-button/iconbutton";
import Modal from "../common/modal/modal";
import "./style.css";
const Content = () => {
  const [showModal, setShowModal] =useState(false);
    const addCity =()=>{
      setShowModal(true);
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
      {showModal ? <Modal/>:<></>}
    </div>
  );
};
export default Content;
