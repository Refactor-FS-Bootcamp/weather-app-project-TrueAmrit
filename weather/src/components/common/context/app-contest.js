import React, { useState } from "react";
import { Cities } from "../../helper/constant";

export const MyContext = React.createContext();

export const ApplicationContextProvider = ({ children }) => {
    const [selectedCities, setSelectedCities] = useState([]);
    const [allCity, setAllCity] = useState(Cities);
    const [currentCity,setCurrentCity]= useState();
    const [cardState, setcardState] = useState(false);
    const [favCity,setFavCity]=useState([])
  
  
    const value = {
      selectedCities,
      setSelectedCities,
      allCity,
      setAllCity,
      currentCity,
      setCurrentCity,
      cardState,
      setcardState,
      favCity,
      setFavCity,

    };
  
    return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
  };
  