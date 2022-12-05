import { useContext } from "react";
import { MyContext } from "../context/app-contest";
import { IconButtonStyle } from "./style";

const IconButton = (props) => {
  const context = useContext(MyContext);
  const { data, handleClick } = props;
  return (
    <IconButtonStyle mode={context.mode}>
      <span onClick={handleClick} class="material-symbols-outlined">
        {data}
      </span>
    </IconButtonStyle>
  );
};
export default IconButton;

// + => "add_circle"
// x => "close"
// star=> "star"
//fill star => "star_half"
