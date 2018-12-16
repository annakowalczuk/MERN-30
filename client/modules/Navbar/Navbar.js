import React from 'react';
import { Link } from 'react-router';

// Import Style
import styles from './Navbar.css';

const Navbar = () => (
  <div className={styles.navbar}>
    <ul>
      <li><Link to="/home" activeClassName={'active'} onlyActiveOnIndex>Home</Link></li>
      <li><Link to="/" activeClassName={'active'} >Posts</Link></li>
      <li><Link to="/about" activeClassName={'active'} >About</Link></li>
    </ul>
  </div>
);

export default Navbar;
