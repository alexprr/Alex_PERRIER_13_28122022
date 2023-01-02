// React Router
import { Link } from 'react-router-dom';

// logo image source
import LogoSrc from '../assets/img/argentBankLogo.png';

// css
import "../styles/navbar.css";


const Navbar = () => {
    return (
        <nav className='main-nav'>
            <a className='main-nav-logo' href="/">
                <img className='main-nav-logo-image' src={LogoSrc} alt="Argent Bank Logo" />
            </a>
            <h1 className="sr-only">Argent Bank</h1>
            <div>
                <Link className='main-nav-item' to="/login">
                    <i className="fa fa-user-circle"></i>
                    &nbsp;Sign In
                </Link>
            </div>
        </nav>
    )
}

export default Navbar