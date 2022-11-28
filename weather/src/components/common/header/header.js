import Button from "../button/button"
import './style.css';

const Header = (props) => {
    const { heading } = props
    const addCity=()=>{
        console.log("Add a city")
    }
    return (
        <div className="header-wrapper">
            <div>{heading}</div>
            <Button data={"Add New City"} handleClick={addCity}/>
        </div>
    )
}
export default Header