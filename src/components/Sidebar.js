import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Sidebar() {
  return (
    <Navbar sticky="top" className="flex-column Sidebar">
      <Nav.Item>
        <Nav.Link to="/" end>Feed</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="/explore">Explore</Nav.Link>
      </Nav.Item>
    </Navbar>
  );
}