// React Router
import { Link } from 'react-router-dom';

// logo image source
import LogoSrc from '../assets/img/argentBankLogo.png';

// css
import "../styles/navbar.css"

const ProfileNavbar = () => {
  return (
    <nav className='main-nav'>
            <a className='main-nav-logo' href="/">
                <img className='main-nav-logo-image' src={LogoSrc} alt="Argent Bank Logo" />
            </a>
            <h1 className="sr-only">Argent Bank</h1>
            <div>
                <Link className='main-nav-item' to="/profile">
                    <i className="fa fa-user-circle"></i>
                    &nbsp;Tony
                </Link>
                <Link className='main-nav-item' to="/">
                    <i className="fa fa-sign-out"></i>
                    &nbsp;Sign Out
                </Link>
            </div>
        </nav>
  )
}

export default ProfileNavbar