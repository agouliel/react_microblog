import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {LinkContainer} from 'react-router-bootstrap';
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <Navbar sticky="top" className="flex-column Sidebar">
      <Nav.Item>
        <LinkContainer to="/">
        <Nav.Link as={NavLink} to="/">Feed</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/explore">
        <Nav.Link as={NavLink} to="/explore">Explore</Nav.Link>
        </LinkContainer>
      </Nav.Item>
    </Navbar>
  );
}