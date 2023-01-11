// Components
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Features from "../components/Features"
import Footer from "../components/Footer"

const Home = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Hero />
                <Features />
            </main>
            <Footer />
        </div>
    )
}

export default Home