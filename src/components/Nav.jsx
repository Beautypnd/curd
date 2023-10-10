import React from "react";
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <button><Link to="/">CREATE-USER</Link></button>
      <button><Link to="/users">USERS-LIST</Link></button>
    </div>
  );
};

export default Nav;
