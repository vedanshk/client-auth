import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
function Header(props) {
  function renderLinks() {
    if (props.authenticated) {
      return (
        <div>
          <Link to="/signout">Sign Out</Link>
          <Link to="/feature">Feature</Link>
        </div>
      );
    } else {
      return (
        <div>
          <ul>

            <li>
              <Link to="/signUp">SignUp</Link>
            </li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
          </ul>
        </div>
      );
    }
  }

  return (
    <div>
      <Link to="/">Redux Auth</Link>
      {renderLinks()}
    </div>
  );
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
