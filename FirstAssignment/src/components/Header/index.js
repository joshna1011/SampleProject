import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import './index.css'

const Header = props => {
  const logoutClicked = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-mbl-content">
        <div className="nav-mbl-logo-con">
          <img
            className="nav-logo-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="logo"
          />

          <button type="button" className="nav-mobile-btn">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="logout"
              className="mbl-logout-img"
              onClick={logoutClicked}
            />
          </button>
        </div>
        <div className="nav-mbl-link-con">
          <ul className="nav-mobile-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/display-data" className="nav-link">
                Display Data
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-con">
          <img
            className="nav-logo-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="logo"
          />
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/display-data" className="nav-link">
                Display Data
              </Link>
            </li>
          </ul>

          <Button
            type="button"
            className="desktop-logout-btn mx-3"
            onClick={logoutClicked}
          >
            Logout
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
