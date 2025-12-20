import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import Hero from './Hero'
import IntroMedia from './IntroMedia'
import Manifesto from './Manifesto'
import '../../styles/HomeStyles.css'

const Home: React.FC = () => {
    return (
        <>
            <Navbar />
            <main className={`home-main`}>
                <Hero />     
                <IntroMedia />
                <Manifesto />
            </main>
            <Footer />
        </>
    )
}

export default Home