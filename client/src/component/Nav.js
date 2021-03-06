import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar  expand="md">
        <NavbarBrand href="/">Save Your Page</NavbarBrand>
        <NavbarToggler onClick={toggle}><span><i class="fa fa-angle-down" aria-hidden="true"></i></span></NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Search</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/collection">Collection</NavLink>
            </NavItem>
            
          </Nav>
      
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;