import React, { useState, useEffect } from "react";

const TopNavbar = () => {
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    if (showMenu === false) {
      if (
        !document
          .getElementById("app-container")
          ?.classList.contains("menu-mobile")
      )
        document.getElementById("app-container")?.classList.add("main-hidden");
      if (
        document
          .getElementById("app-container")
          ?.classList.contains("menu-mobile")
      )
        document
          .getElementById("app-container")
          ?.classList.add("main-show-temporary");
    } else if (showMenu === true) {
      if (
        !document
          .getElementById("app-container")
          ?.classList.contains("menu-mobile")
      )
        document
          .getElementById("app-container")
          ?.classList.remove("main-hidden");
      if (
        document
          .getElementById("app-container")
          ?.classList.contains("menu-mobile")
      )
        document
          .getElementById("app-container")
          ?.classList.remove("main-show-temporary");
    }
  }, [showMenu]);

  return (
    <nav className="navbar fixed-top">
      <div className="d-flex align-items-center navbar-left">
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="menu-button d-none d-md-block"
        >
          <svg
            className="main"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 9 17"
          >
            <rect x="0.48" y="0.5" width="7" height="1" />
            <rect x="0.48" y="7.5" width="7" height="1" />
            <rect x="0.48" y="15.5" width="7" height="1" />
          </svg>
          <svg
            className="sub"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 17"
          >
            <rect x="1.56" y="0.5" width="16" height="1" />
            <rect x="1.56" y="7.5" width="16" height="1" />
            <rect x="1.56" y="15.5" width="16" height="1" />
          </svg>
        </span>

        <span
          onClick={() => setShowMenu(!showMenu)}
          className="menu-button-mobile d-xs-block d-sm-block d-md-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 17">
            <rect x="0.5" y="0.5" width="25" height="1" />
            <rect x="0.5" y="7.5" width="25" height="1" />
            <rect x="0.5" y="15.5" width="25" height="1" />
          </svg>
        </span>
      </div>

      <a className="navbar-logo" href="Dashboard.Default.html">
        <span className="logo d-none d-xs-block">
          <img src="img/Saytara.jpeg" alt="" style={{ maxHeight: "50px" }} />
        </span>
        <span className="logo-mobile d-block d-xs-none">
          <img src="img/Saytara.jpeg" alt="" style={{ maxHeight: "30px" }} />
        </span>
      </a>

      <div className="navbar-right">
        <div className="header-icons d-inline-block align-middle">
          <button
            className="header-icon btn btn-empty d-none d-sm-inline-block"
            type="button"
            id="fullScreenButton"
          >
            <i className="simple-icon-size-fullscreen"></i>
            <i className="simple-icon-size-actual"></i>
          </button>
        </div>

        <div className="user d-inline-block">
          <button
            className="btn btn-empty p-0"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span className="name">Sarah Kortney</span>
            <span>
              <img alt="" src="img/profile-pic-l.jpg" />
            </span>
          </button>

          <div className="dropdown-menu dropdown-menu-right mt-3">
            <a className="dropdown-item" href="/#">
              Sign out
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
