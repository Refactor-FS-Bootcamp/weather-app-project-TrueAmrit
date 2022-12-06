import { useContext, useEffect, useState } from "react";
import { Cities } from "../../helper/constant";
import IconButton from "../icon-button/iconbutton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MyContext } from "../context/app-contest";
import { ModalContainer } from "./style";

const Modal = (props) => {
  const context = useContext(MyContext);
  const [searchText, setSearchText] = useState("");
  
  useEffect(()=>{
    const unselected =Cities.filter((city)=>!context.selectedCities.includes(city))
    context.setAllCity(unselected)
  },[])

  const handleChange = (e) => {
    setSearchText(e.target.value);
    const filterCities = Cities.filter(
      (city) =>
        city.name.toLowerCase().includes(e.target.value.toLowerCase()) &&
        !context.selectedCities.includes(city)
    );
    context.setAllCity(filterCities);
  };
  const handleAdd = (city) => {
    if (!context.selectedCities.includes(city)) {
      const selected = [...context.selectedCities, city];
      context.setSelectedCities(selected);
      const unselectedCities = context.allCity.filter((c) => c.id !== city.id);
      context.setAllCity(unselectedCities);
      toast.success("City Added", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <ModalContainer mode={context.mode}>
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
          <div className="header-tittle">Add City Modal</div>
          <IconButton data={"close"} handleClick={props.closeModal} />
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
            {context.allCity.map((city) => {
              return (
                <div className="city-container" onClick={() => handleAdd(city)}>
                  <div>{city.name}</div>
                  <IconButton data={"add_circle"} />
                </div>
              );
            })}
            {context.allCity.length === 0 && <div>Data not found</div>}
          </div>
        </div>
      </div>
      <div
        className="close-clicked"
        onClick={(e) => {
          e.preventDefault();
          props.closeModal();
        }}
      ></div>
    </div>
    </ModalContainer>
  );
};
export default Modal;
