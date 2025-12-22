import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import Hero from './Hero'
import IntroMedia from './IntroMedia'
import Manifesto from './Manifesto'
import LifestylePromo from './LifestylePromo'
import Sponsorship from './Sponsorship'
import Highlights from './Highlights'
import '../../styles/HomeStyles.css'

const Home: React.FC = () => {
    return (
        <>
            <Navbar />
            <main className={`home-main`}>
                <Hero />     
                <IntroMedia />
                <Manifesto />
                <LifestylePromo />
                <Sponsorship />
                <Highlights />
            </main>
            <Footer />
        </>
    )
}

export default Home