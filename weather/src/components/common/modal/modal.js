import { useState } from "react";
import { Cities } from "../../helper/constant";
import IconButton from "../icon-button/iconbutton";
import "./style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modal = () => {
  const [searchText, setSearchText] = useState("");
  const [allCity, setAllCity] = useState(Cities);
  const [selectedCities, setSelectedCities] = useState([]);
  const [currentCity, setCurrentCity] = useState(Cities);

  const handleChange = (e) => {
    setSearchText(e.target.value);
    const filterCities = currentCity.filter((city) =>
      city.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setAllCity(filterCities);
  };
  const handleAdd = (city) => {
    console.log("city added");
    const unselectedCities = currentCity.filter((c) => c.id !== city.id);
    toast.success("City Added", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    console.log(unselectedCities);
    setAllCity(unselectedCities);
    setCurrentCity(unselectedCities);
    let selectedCity = [...selectedCities, city];
    setSelectedCities(selectedCity);
    setSearchText("")
  };
  console.log(selectedCities);

  const closeModal = () => { 
  };
  
  return (
        <div className="modal-wrapper">
          <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <div className="modal-content">
            <div className="modal-header">
              <div className="header-tittle">
               Add City Modal
              </div>
              <IconButton data={"close"} handleClick={closeModal} />
            </div>
            <div className="content-modal">
              <div className="search-input">
                <input
                  placeholder="search city"
                  type="text"
                  class="input"
                  value={searchText}
                  onChange={handleChange}
                />
              </div>
              <div className="cities-container">
                {allCity.map((city) => {
                  return (
                    <div
                      className="city-container"
                      onClick={() => handleAdd(city)}
                    >
                      <div>{city.name}</div>
                      <IconButton data={"add_circle"} />
                    </div>
                  );
                })}
                {allCity.length === 0 && <div>Data not found</div>}
              </div>
            </div>
          </div>
        </div>
      
  );
};
export default Modal;
