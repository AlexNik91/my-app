import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header">
      <img src="https://worksolutions.ru/uploads/Ux_BYD_Uf_B_Nl9_Rf_D5r6w_M_Dv_A_Wke3m_G_Tf_Za_Dcm_HGZ_Wc_67283f7901.png"></img>
      <div className="logBlock">
        Free
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};
export default Header;
