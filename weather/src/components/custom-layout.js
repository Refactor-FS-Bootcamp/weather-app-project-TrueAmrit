import Sidebar from "./common/sidebar/sidebar"

const CustomLayout =(props)=>{
    const sidebarTab = [{ tab: "Home" }, { tab: "City" }];
    return(
        <div style={{display:"flex"}}>
        <Sidebar sidebarTab={sidebarTab}/>
        {props.children}
        </div>
    )
}
export default CustomLayout