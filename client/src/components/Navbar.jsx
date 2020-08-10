import React from 'react';
import Nav from "react-bootstrap/Nav";


const Navbar = () => {
    return (
        <Nav
        activeKey="/search"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/search">Search</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="save">Save</Nav.Link>
        </Nav.Item>
      </Nav>
    );
};

export default Navbar;