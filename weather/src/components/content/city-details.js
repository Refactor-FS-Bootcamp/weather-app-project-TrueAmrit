import { useContext } from "react";
import { MyContext } from "../common/context/app-contest";
import IconButton from "../common/icon-button/iconbutton";
import { toast, ToastContainer } from "react-toastify";
import { CityDetailContainer } from "./style";

const CityDetails = () => {
  const context = useContext(MyContext);

  const addFavCity = () => {
    if (!context.favCity.includes(context.currentCity)) {
      const current = [...context.favCity, context.currentCity];
      context.setFavCity(current);
      toast.success('City added to favorites', {
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
    else
    {
      const fav = context.favCity.filter((c) => c.id !== context.currentCity.id);
      context.setFavCity(fav)
      // console.log("done");
      toast('❌City removed from favorites', {
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
    <CityDetailContainer>
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
      {context.cardState ? (
        <div className="right-card">
          <div className="right-card-header">
            <div>{context.currentCity.name}</div>
            <IconButton data={!context.favCity.includes(context.currentCity) ? "star" : "star_half"} handleClick={addFavCity} />
          </div>
          <div className="right-card-content">
            <div style={{color:"#3867d6"}}>
              <i>"{context.currentCity.desc}"</i>
            </div>
            <hr />
            <div>
              <b>Temperature: </b>
              {context.currentCity.temp}
            </div>
            <div>
              <b>Humidity: </b>
              {context.currentCity.humidity}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </CityDetailContainer>
  );
};

export default CityDetails;
