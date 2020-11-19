import React from "react";
import "./menu.scss";
import MenuItem from "./menu-item/MenuItem";
import { MENU_DATA } from "../../data/techData";

const Menu = () => {
  const [menu, setMenu] = React.useState(MENU_DATA);
  return (
    <div className="menu-container">
      <div className="menu-item-container">
        {menu.map((man) => (
          <MenuItem key={man.id} man={man} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
