import React from "react";
import { useState, useEffect } from "react";

import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
// import axios from "axios";
import * as Icon from "react-feather";
import { Route } from "react-router-dom";
import axiosConfig from "../../../axiosConfig";

const handleNavigation = (e, path) => {
  e.preventDefault();
  // history.push(path);
  window.location.replace(path);
};

const NavbarUser = () => {
  const [profilepic, setProfilepic] = useState([]);
  // console.log(notifications);
  useEffect(() => {
    // const astroId = localStorage.getItem("astroId");
    // const getOneUser = () => {
    //   axios
    //     .get(`http://13.233.228.168:8000/admin/getoneAstro/${astroId}`)
    //     .then((response) => {
    //       console.log(response.data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // };

    async function getOneUser() {
      try {
        //axiosConfig.get(`/dlt_startup/${id}`)
        const astroId = localStorage.getItem("astroId");
        const data = await axiosConfig.get(`/admin/getoneAstro/${astroId}`);
        // /admin/viewoneadmin/${userId}
        console.log(data.data.data);
        setProfilepic(data.data.data);
      } catch (error) {
        console.log("SomeThing Wrong");
      }
    }

    getOneUser();
  }, []);

  return (
    <ul className="nav navbar-nav navbar-nav-user float-right">
      <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
        <DropdownToggle tag="a" className="nav-link dropdown-user-link">
          <div className="user-nav d-sm-flex d-none">
            {/* <span className="user-name text-bold-600">Astro</span> */}
            {profilepic?.fullname}
            {/* <span className="user-status">Available</span> */}
          </div>
          <span data-tour="user">
            <img
              src={profilepic?.img}
              className="round"
              height="40"
              width="40"
              alt="avatar"
            />
          </span>
        </DropdownToggle>
        {/* {/ <UserDropdown {...this.props} /> /} */}
        <DropdownMenu right>
          <DropdownItem
            tag="a"
            href="#"
            onClick={(e) => handleNavigation(e, "/#/pages/profile")}
          >
            <Icon.User size={14} className="mr-50" />
            <span className="align-middle">Edit Profile</span>
          </DropdownItem>

          <DropdownItem divider />
          <Route
            render={({ history }) => (
              <DropdownItem
                tag="a"
                onClick={(e) => {
                  localStorage.removeItem("astroId");
                  window.location.replace("/#/pages/login");
                }}
              >
                <Icon.Power size={14} className="mr-50" />
                <span className="align-middle">LogOut</span>
              </DropdownItem>
            )}
          />
        </DropdownMenu>
      </UncontrolledDropdown>
    </ul>
  );
};
export default NavbarUser;
