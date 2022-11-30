import "../App.css";
import { Routes, Route } from "react-router-dom";
import City from "../pages/city";
import Home from "../pages/home";
import CustomLayout from "../components/custom-layout";

function AppRoute() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <CustomLayout>
              <Home />
            </CustomLayout>
          }
        />
        <Route
          path="/city"
          element={
            <CustomLayout>
              <City />
            </CustomLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default AppRoute;
