import './Navbar.scss'
// import { CiSearch } from "react-icons/ci";
function Navbar() {
  return (
    <div className="navbar">
      {/* logo section */}
      <div className="logo-section">
        <img src="../../dist/assets/logo-png.png" />
      </div>

      <div className="link-section">
        <ul>
          <a href="/">
            <li>Home</li>
          </a>
          <a href="/landing-page">
            <li>Landing Page</li>
          </a>
          <a href="/about">
            <li>About</li>
          </a>
          <a href="#">
            <li>Services</li>
          </a>
          <a href="#">
            <li>Work</li>
          </a>
          {/* <a href='#'><li>Contact</li></a> */}
        </ul>
      </div>

      
        <a href="/contact" className="btn btn-1">
          <svg>
            <rect x="0" y="0" fill="none" width="100%" height="100%" />
          </svg>
          CONTACT US
        </a>
    </div>
  );
}

export default Navbar