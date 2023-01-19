import React from 'react';

import { Container } from './style';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <Container>
          <h1>
              <Link to={"/"} id='logo' href='#!'>e-Learning</Link>
          </h1>
          <ul>
              <li><Link to={"/home"} href=''>Home</Link></li>
              <li><Link to={"/courses"} href=''>Courses</Link></li>
              <li><Link to={"/contact"} href=''>ContactUs</Link></li>
          </ul>
    </Container>
  )
}

export default Navbar