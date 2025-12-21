import { useMediaQuery } from 'react-responsive'
import Button from '../../components/Button'
import disco_ball from '../../assets/images/disco_ball.png'
import sponsors from '../../assets/images/sponsors.png'

const Sponsorship = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1024px)'
    })
    return (
        <section className={`align-items-center flex-column home-page-sponsorship-section`}>
            <img alt="Disco Ball" className={`home-page-disco-ball`} src={disco_ball} />
            <div className={`align-items-center flex-column home-page-sponsorship-section-text-button-container text-center`}>
                <h2 className={`bold-text ${isDesktopOrLaptop ? 'font-size-72' : 'font-size-32'}`}>BECOME A SPONSOR</h2>
                <p className={`${isDesktopOrLaptop ? 'font-size-16' : 'font-size-12'} light-text`}>
                    Our partners share our vision of spreading the Amapiano gospel to the world. With their support,
                    we are able to curate unforgettable experiences for every event.
                </p>
                <Button style={{marginTop: isDesktopOrLaptop ? '15px' : '5px'}} text={'Join Our Sponsors'} blackBgWhiteText />
            </div>
            <div className="marquee">
                <div className="marquee-track">
                    <img alt="Sponsors' Brands" className="home-page-sponsor-brands" src={sponsors} />
                    <img alt="Sponsors' Brands" className="home-page-sponsor-brands" src={sponsors} />
                </div>
            </div>
        </section>
    )
}

export default Sponsorship