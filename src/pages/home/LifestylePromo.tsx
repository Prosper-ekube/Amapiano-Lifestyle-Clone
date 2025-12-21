import { useMediaQuery } from "react-responsive"
import Button from "../../components/Button"

const LifestylePromo = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1024px)'
    })
    return (
        <section className={`color1 flex-column home-page-lifestyle-promo-section ${isDesktopOrLaptop ? 'flex-start' : 'align-items-center text-center'}`}>
            <h2 className={`bold-text ${isDesktopOrLaptop ? 'font-size-72' : 'font-size-32'}`}>IT'S MORE THAN A GENRE, IT'S A WAY OF LIFE</h2>
            <div className={`flex-column home-page-lifestyle-promo-section-paragraph-button-container ${isDesktopOrLaptop ? 'flex-start' : 'align-items-center'}`}>
                <p className={`${isDesktopOrLaptop ? 'font-size-18' : 'font-size-14'} light-text`}>From its infectious beats to the electric energy of its dancers, Amapiano is the heartbeat of an entire culture.</p>
                <p className={`${isDesktopOrLaptop ? 'font-size-18' : 'font-size-14'} light-text`}>Whether you're here for the music, the fashion, or the vibe, our events embody everything that Amapiano represents: freedom, connection, and joy.</p>
                <Button text={'Join The Lifestyle'} />
            </div>
        </section>
    )
}

export default LifestylePromo