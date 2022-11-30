import "./style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = (props) => {
  const { sidebarTab } = props;
  const [selectedTab, setSelectedTab] = useState("Home");
  const navigate =useNavigate();
  const handleClick = (tab) => {
    setSelectedTab(tab);
    if (tab === "Home") {
      navigate("/")
      console.log("home");
    } else if (tab === "City") {
      navigate("/city")
      console.log("Cities");
    }
  };
  return (
    <div className="sidebar-wrapper">
      {sidebarTab.map((tab) => {
        return (
          <div
            className={selectedTab === tab.tab ? "active-tab" : "inactive-tab"}
            onClick={() => handleClick(tab.tab)}
          >
            {tab.tab}
          </div>
        );
      })}
    </div>
  );
};
export default Sidebar;
