import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/app-contest";
import { SiderContainer } from "./style";

const Sidebar = (props) => {
  const { sidebarTab } = props;
  const [selectedTab, setSelectedTab] = useState("Home");
  const context = useContext(MyContext);
  const navigate = useNavigate();
  const handleClick = (tab) => {
    setSelectedTab(tab);
    if (tab === "Home") {
      navigate("/");
    } else if (tab === "City") {
      navigate("/city");
    }
  };
  const handleMode = () => {
    if (context.mode === "light") {
      context.setMode("dark");
    } else {
      context.setMode("light");
    }
  };
  return (
    <SiderContainer>
      <div className="sidebar-wrapper">
        {sidebarTab.map((tab) => {
          return (
            <div
              className={
                selectedTab === tab.tab ? "active-tab" : "inactive-tab"
              }
              onClick={() => handleClick(tab.tab)}
            >
              {tab.tab}
            </div>
          );
        })}
        <br/>
        <div className="mode">
          <span onClick={handleMode} className={context.mode==="light" ? "material-symbols-outlined" : "material-symbols-dark"}>
            dark_mode
          </span>
        </div>
      </div>
    </SiderContainer>
  );
};
export default Sidebar;
