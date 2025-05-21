import React from 'react';
import { FaHome, FaUser, FaFileAlt, FaEnvelope } from 'react-icons/fa';
import './nav.css';

const Nav = () => {
  return (
    <nav>
      <a href="#"><FaHome /></a>
      <a href="#about"><FaUser /></a>
      <a href="#portfolio"><FaFileAlt /></a>
      <a href="#contact"><FaEnvelope /></a>
    </nav>
  );
};

export default Nav;