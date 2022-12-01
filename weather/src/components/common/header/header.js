import { useState } from "react";
import Button from "../button/button";
import Modal from "../modal/modal";
import "./style.css";

const Header = (props) => {
  const { heading } = props;
  const [showModal, setShowModal] =useState(false);
  const addCity = () => {
    setShowModal(true);
    console.log("Add a city");
  };
  return (
    <div className="content-home">
      <div className="header-wrapper">
        <div>{heading}</div>
        <Button data={"Add New City"} handleClick={addCity} />
      </div>
      <div className="body-container">
        <div className="no-city">
          You have not selected any city as a favorite yet.
        </div>
      </div>
      {showModal ? <Modal state={true}/>:<></>}
    </div>
  );
};
export default Header;
