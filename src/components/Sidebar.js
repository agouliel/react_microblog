import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {LinkContainer} from 'react-router-bootstrap';

export default function Sidebar() {
  return (
    <Navbar sticky="top" className="flex-column Sidebar">
      <Nav.Item>
        <LinkContainer to="/">
        <Nav.Link>Feed</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/explore">
        <Nav.Link>Explore</Nav.Link>
        </LinkContainer>
      </Nav.Item>
    </Navbar>
  );
}