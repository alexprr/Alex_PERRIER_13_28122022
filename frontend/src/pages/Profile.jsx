// Components
import Account from "../components/Account"
import Footer from "../components/Footer"

// React Router
import { Link } from 'react-router-dom';

// logo image source
import LogoSrc from '../assets/img/argentBankLogo.png';

// Hook
import { useNavigate } from 'react-router'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import * as loginActions from '../features/loginSlice'

const Profile = () => {
  const { logout } = useSelector((state) => state.login)
  let navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
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
                <Link className='main-nav-item' to="/" onClick={() => dispatch(loginActions.logout())}>
                    <i className="fa fa-sign-out"></i>
                    &nbsp;Sign Out
                </Link>
            </div>
        </nav>
        <main className="main bg-dark">
          <div className="header">
            <h1>Welcome back <br />Tony Jarvis !</h1>
            <button className="edit-button">Edit Name</button>
          </div>
            <Account />
        </main>
        <Footer />
    </div>
  )
}

export default Profile