import ProfileNavbar from "../components/ProfileNavbar"
import Welcome from "../components/Welcome"
import Account from "../components/Account"
import Footer from "../components/Footer"

const Profile = () => {
  return (
    <div>
        <ProfileNavbar />
        <main className="main bg-dark">
            <Welcome />
            <Account />
        </main>
        <Footer />
    </div>
  )
}

export default Profile