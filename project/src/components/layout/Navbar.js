import React from 'react';
import { Link } from 'react-router-dom';
import Signedinlinks from './SignedInlinks';
import SignedOutlinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = props => {
  const { auth } = props;
  console.log(auth);

  const links = auth.uid ? <Signedinlinks /> : <SignedOutlinks />;

  return (
    <nav className="nav-wrapper grey darken">
      <div className="container">
        <Link to="/" className="brand-logo">
          MarioPlan
        </Link>
        {links}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Navbar);
