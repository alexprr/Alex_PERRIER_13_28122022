// Components
import Account from "../components/Account"
import Footer from "../components/Footer"

// React Router
import { Link } from 'react-router-dom';

// logo image source
import LogoSrc from '../assets/img/argentBankLogo.png';

// Redux
import { useDispatch, useSelector } from 'react-redux'
import * as loginActions from '../features/loginSlice'
import * as userActions from '../features/userSlice'

// to fetchi user profile
import { getUserProfile } from "../api/api";

const Profile = () => {
  const dispatch = useDispatch();
  const { firstName, lastName } = useSelector((state) => state.user)

  getUserProfile('/profile').then((data) => {
    dispatch(userActions.firstName(data.body.firstName))
    dispatch(userActions.lastName(data.body.lastName))
  }).catch(error => dispatch(userActions.error(error.response.data.message)))

  const handleLogout = () => {
    dispatch(loginActions.logout())
    dispatch(userActions.logout())
    window.localStorage.removeItem("token");
  }

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
                    &nbsp;{firstName}
                </Link>
                <Link className='main-nav-item' to="/" onClick={handleLogout}>
                    <i className="fa fa-sign-out"></i>
                    &nbsp;Sign Out
                </Link>
            </div>
        </nav>
        <main className="main bg-dark">
          <div className="header">
            <h1>Welcome back <br />{`${firstName} ${lastName} !`}</h1>
            <button className="edit-button">Edit Name</button>
          </div>
            <Account />
        </main>
        <Footer />
    </div>
  )
}

export default Profile