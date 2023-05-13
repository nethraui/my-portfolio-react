import { Outlet } from 'react-router-dom'
import './Layout.scss'
import NavBar from './NavBar'

function Layout () {
  return (
    <div className="App">
      <NavBar />
      <div className="page">
        <Outlet />
        <span className="tags bottom-tags">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <br />
        </span>
      </div>
    </div>
  )
}

export default Layout
