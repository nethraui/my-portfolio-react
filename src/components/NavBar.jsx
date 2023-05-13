import './NavBar.scss'
import LogoN from '../assets/images/logoN.png'
import LogoNethra from '../assets/images/Nethra.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faScrewdriverWrench,
  faFileText
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={LogoN} alt="Logo" />
        </Link>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>

          <NavLink
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
        </nav>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/nethra-65b58485/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#b9b9b9" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/nethraui"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} color="#b9b9b9" />
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
export default NavBar