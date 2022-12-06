import { useContext, useState } from "react";
import { MyContext } from "../common/context/app-contest";
import IconButton from "../common/icon-button/iconbutton";
import Modal from "../common/modal/modal";
import CityDetails from "./city-details";
import { MainContent } from "./style";

const Content = () => {
  const context = useContext(MyContext);
  const [showModal, setShowModal] = useState(false);
  

  const addCity = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const showDetailCard = (city) => {
    context.setCurrentCity(city);
    context.setcardState(true);
  };
  return (
    <MainContent mode={context.mode}>
    <div className="main-content">
      <div className="main-wrapper">
        <div className="left-card">
          <div className="card-header">
            <div>Cities</div>
              <IconButton handleClick={addCity} data={"add_circle"} />
          </div>
          <div className="card-container">
            {context.selectedCities.length === 0 ? (
              <div className="no-city">You have not selected any city.</div>
            ) : (
              <>
                {context.selectedCities.map((city) => {
                  return (
                    <div
                      className="city-box"
                      onClick={() => showDetailCard(city)}
                    >
                      <div className="city-d">{city.name}</div>
                      <div className="city-d">{city.temp}</div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
        <CityDetails/>
      </div>
      {showModal ? <Modal closeModal={closeModal} reset={true} /> : <></>}
    </div>
    </MainContent>
  );
};
export default Content;
