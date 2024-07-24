import { Link } from "react-router-dom";
import {
  NavItem,
  Navbar,
  NavbarBrand,
  NavbarContent,
  SideContent,
  SideItems
} from "responsive-navigation";
// import "../index.css";

export default function Navigation() {
  return (
    <Navbar
      style={{
        backgroundColor: "white",
        borderBottom: "1px solid silver",
        padding: "20px 0",
      }}
    >
      <NavbarBrand>
        <Link to="/" style={{ fontSize: "30px", fontWeight: "700" }}>
          <img
            src="https://media.licdn.com/dms/image/D4D03AQFnJ65teKuF7A/profile-displayphoto-shrink_800_800/0/1676565408665?e=1725494400&v=beta&t=PPc2mS9RkLvcP5aorBaZmQKHNA1J0fLvtpXLieUrA6s"
            width={50}
            alt=""
          />
        </Link>
      </NavbarBrand>
      <NavbarContent>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/about">About</Link>
        </NavItem>
        <NavItem>
          <Link to="/services">Services</Link>
        </NavItem><NavItem>
          <Link to="/projects">Projects</Link>
        </NavItem>
        <NavItem>
          <Link to="/blogs">Blogs</Link>
        </NavItem>
      </NavbarContent>
      <SideContent>
        <SideItems>
          <button className="border-2 p-3 rounded-md border-blue-600 font-thin">
            Contact US
          </button>
        </SideItems>
      </SideContent>
    </Navbar>
  );
}
