import './style.css';
import { useState } from "react";

const Sidebar = (props) => {
    const { sidebarTab } = props;
    const [active, setstate] = useState({
        background: "#EAB543",
    });
    const [inactive, setstate2] = useState({
    });
    const handleClick = (tab) => {
        if (tab === "Home") {
            setstate({background: "#EAB543"})
            setstate2()
            console.log("home");
            
        } else if (tab === "City") {
            setstate2({background: "#EAB543"})
            setstate()
            console.log("Cities");
        }
    };
    return (
        <div className="sidebar-wrapper">
            {sidebarTab.map((tab, index) => {
                if (index === 0) {
                    return (
                        <div className='tab' style={active} onClick={() => handleClick(tab.tab)}>{tab.tab}</div>
                    )
                }
                else {
                    return (
                        <div className='tab' style={inactive} onClick={() => handleClick(tab.tab)}>{tab.tab}</div>
                    )
                }
            })}
        </div>
    )
}
export default Sidebar