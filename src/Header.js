import React from 'react';
import { Nav, NavItem } from 'reactstrap';


const Header = () => {
  return (
    <Nav className="navbar navbar-default">
      <NavItem>
        <a className="navbar-brand" href="#">
          Contacts
          </a>
      </NavItem>
    </Nav>
  );
};

export default Header;
