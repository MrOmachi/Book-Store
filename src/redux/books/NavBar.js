import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navBar">
      <div className="navList">
        <h1>Bookstore CMS</h1>
        <p>
          <Link className="link" to="/"> BOOKS </Link>
        </p>
        <p>
          <Link className="link" to="/Category"> CATEGORIES </Link>
        </p>
      </div>
      <div className="profile">Profile Image</div>
    </div>
  );
}

export default NavBar;
