// Components
import Account from "../components/Account"
import Footer from "../components/Footer"

import { useState, useEffect } from "react";

// React Router
import { Link } from 'react-router-dom';

// logo image source
import LogoSrc from '../assets/img/argentBankLogo.png';

// Redux
import { useDispatch, useSelector } from 'react-redux'
import * as loginActions from '../features/loginSlice'
import * as userActions from '../features/userSlice'

// axios 
import { getUserProfile } from "../api/api";
import { updateUserProfile } from "../api/api"

const Profile = () => {
  const dispatch = useDispatch();
  const { firstName, lastName } = useSelector((state) => state.user)
  const [newUserName, setNewUserName] = useState({
    firstName: "",
    lastName: ""
  })
  const [form, setForm] = useState(null)
  const [editButton, setEditButton] = useState(null)

  // DOM Elements
  useEffect(() => {
    const form = document.querySelector(".header-form")
    const editButton = document.querySelector(".edit-button")
    setForm(form)
    setEditButton(editButton)
  }, [])
  
  useEffect(() => {
    // get user datas from API
    getUserProfile('/profile').then((data) => {
      dispatch(userActions.firstName(data.body.firstName))
      dispatch(userActions.lastName(data.body.lastName))
    }).catch(error => dispatch(userActions.error(error.response.data.message)))
  }, [dispatch])
  
  // handle user logout
  const handleLogout = () => {
    dispatch(loginActions.logout())
    dispatch(userActions.logout())
    window.localStorage.removeItem("token");
  }

  // sets username values on input changes
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setNewUserName({
        ...newUserName,
        [name]: value
    })
  } 

  const applyUserNameChanges = async (e) => {
    e.preventDefault()
    try {
      await updateUserProfile('/profile', newUserName)
      .then((data) => {
        dispatch(userActions.firstName(data.body.firstName))
        dispatch(userActions.lastName(data.body.lastName))
        console.log(data);
      })
      } catch (error) {
        dispatch(loginActions.error(error.response.data.message))
      }
    }

  // show edit form and hide edit buton
  const displayEditForm = () => {
    form.classList.add("show")
    editButton.classList.add("hide")
  }

  // hide edit form and show edit button 
  const cancelEditForm = (e) => {
    e.preventDefault()
    form.classList.remove("show")
    editButton.classList.remove("hide")
  }
  
  console.log(newUserName);

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
            <form className="header-form" onSubmit={applyUserNameChanges}>
              <div className="input-group">
                <input type="text" placeholder={firstName} name="firstName" onChange={handleChange}/>
                <input type="text" placeholder={lastName} name="lastName" onChange={handleChange}/>
              </div>
              <div className="button-group">
                <button type="submit" className="save-button">Save</button>
                <button className="cancel-button" onClick={cancelEditForm}>Cancel</button>
              </div>
            </form>
            <button className="edit-button" onClick={displayEditForm}>Edit Name</button>
          </div>
            <Account />
        </main>
        <Footer />
    </div>
  )
}

export default Profile