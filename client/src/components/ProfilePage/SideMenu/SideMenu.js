import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { logout } from "../../../store/actions/Index";
import "./SideMenu.scss";

const SideMenu = ({ logout }) => {
  return (
    <nav id="nav" role="navigation" className="sideMenuContainer">
      <ul>
        <li className="sideMenuTitles">
          <NavLink style={{ color: "white", textDecoration: "none" }} to="/">
            Home
          </NavLink>
        </li>
        <li className="sideMenuTitles">
          <NavLink
            exact={true}
            style={{ color: "white", textDecoration: "none" }}
            activeStyle={{ color: "#fa516a" }}
            to={`/${"u2"}/profile`}
          >
            My Collection
          </NavLink>
        </li>
        <li className="sideMenuTitles">
          Upload
          {/* <NavLink>Upload</NavLink> */}
        </li>
        <li className="sideMenuTitles">
          <NavLink
            exact={true}
            style={{ color: "white", textDecoration: "none" }}
            activeStyle={{ color: "#fa516a" }}
            activeClassName="sideMenuTitlesActive"
            to={`/${"u2"}/profile/categories`}
          >
            Categories
          </NavLink>
        </li>
        <li className="sideMenuTitles">
          <NavLink
            exact={true}
            style={{ color: "white", textDecoration: "none" }}
            activeStyle={{ color: "#fa516a" }}
            activeClassName="sideMenuTitlesActive"
            to={`/${"u2"}/profile/settings`}
          >
            Account Settings
          </NavLink>
        </li>
        <li
          onClick={() =>
            window.confirm("Are you sure you wish to dlog out?") && logout()
          }
          className="sideMenuTitles"
        >
          Log Out
        </li>
      </ul>
    </nav>
  );
};

// https://codesandbox.io/s/vq823o4947 MOBILE VIEW ANIMATION
// https://codesandbox.io/s/p9v05k68oq Nested routes

export default connect(
  null,
  { logout }
)(SideMenu);
