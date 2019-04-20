import React from 'react';
import { NavLink } from 'react-router-dom';
const SignedOutlinks = () => {
  return (
    <nav className="nav-wrapper grey darken">
      <ul className="right">
        <li>
          <NavLink to="/signup">Signup</NavLink>
        </li>
        <li>
          <NavLink to="/signin">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SignedOutlinks;
