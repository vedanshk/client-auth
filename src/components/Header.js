
import React from "react";
import { Link } from "react-router-dom";

function Header() {




    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Redux Auth</Link>
                </li>
                <li>
                    <Link to="/signUp">SignUp</Link>
                </li>
                <li>
                    <Link to="/signin">Sign In</Link></li>
            </ul>


            <Link to="/signout">Sign Out</Link>
            <Link to="/feature">Feature</Link>

        </div>

    );
}





export default Header;