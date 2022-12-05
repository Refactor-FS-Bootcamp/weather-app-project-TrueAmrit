import { useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Cities } from "../../helper/constant";
import Button from "../button/button";
import { MyContext } from "../context/app-contest";
import IconButton from "../icon-button/iconbutton";
import Modal from "../modal/modal";
import { HeaderHomeContainer } from "./style";


const Header = (props) => {
  const { heading } = props;
  const [showModal, setShowModal] = useState(false);
  const context = useContext(MyContext);
  const addCity = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    const unselected =Cities.filter((city)=>!context.selectedCities.includes(city))
    context.setAllCity(unselected)
    setShowModal(false);
  };
 

  const removeFavCity = (city) => {
    console.log("city removed");
    const favCity = context.favCity.filter((c) => c.id !== city.id);
    context.setFavCity(favCity);
    toast("❌City removed from favorites", {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <HeaderHomeContainer mode={context.mode}>
    <div className="content-home">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="header-wrapper">
        <div className="tittle-header">{heading}</div>
        <Button data={"Add New City"} handleClick={addCity} />
      </div>
      <div className="body-container">
        {context.favCity.length === 0 ? (
          <div className="no-city">
            You have not selected any city as a favorite yet.
          </div>
        ) : (
          <>
            {context.favCity.map((city) => {
              return (
                <div className="favcity-box">
                  <div className="favcity-header">
                    <div>{city.name}</div>
                    <IconButton
                      data={"star_half"}
                      handleClick={() => removeFavCity(city)}
                    />
                  </div>
                  <div className="favcity-content">
                    <div style={{ color: "#3867d6" }}>
                      <i>"{city.desc}"</i>
                    </div>
                    <div>
                      <b>Temperature: </b>
                      {city.temp}
                    </div>
                    <div>
                      <b>Humidity: </b>
                      {city.humidity}
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
      {showModal ? <Modal closeModal={closeModal} /> : <></>}
    </div>
    </HeaderHomeContainer>
  );
};
export default Header;
