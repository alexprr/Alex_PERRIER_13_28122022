import Navbar from "../components/Navbar"
import LoginForm from "../components/LoginForm"
import Footer from "../components/Footer"

import "../styles/login.css"

const Login = () => {
    return (
        <div className="container">
            <Navbar />
            <main className="main bg-dark">
                <LoginForm />
            </main>
            <Footer />
        </div>
    )
}

export default Login