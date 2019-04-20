import React from 'react';
import { Link } from 'react-router-dom';
import Signedinlinks from './SignedInlinks';
import SignedOutlinks from './SignedOutLinks';
const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken">
      <div className="container">
        <Link to="/" className="brand-logo">
          MarioPlan
        </Link>
        <Signedinlinks />
        <SignedOutlinks />
      </div>
    </nav>
  );
};

export default Navbar;
