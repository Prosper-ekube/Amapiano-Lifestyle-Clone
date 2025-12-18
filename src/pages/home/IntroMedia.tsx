import { useMediaQuery } from 'react-responsive'
import intro_image from '../../assets/images/intro-image.png'
import home_page_light_fixture from '../../assets/images/home_page_light_fixture.png'


const IntroMedia: React.FC = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1024px)'
    })
    return (
        <section className={`align-items-center flex-column home-page-intro-media-section`}>
            <img alt='Intro Image' className={`home-page-intro-image`} src={intro_image} />
            <img alt='Light Fixture' src={home_page_light_fixture} style={{ width: '100%' }} />
            <div className={`align-items-center flex-column home-page-intro-media-section-text-container text-center`}>
                <h3 className={`color4 ${isDesktopOrLaptop ? 'font-size-24' : 'font-size-12'} light-text`}>UPCOMING EVENTS</h3>
                <h2 className={`color6 extra-bold-text ${isDesktopOrLaptop ? 'font-size-58' : 'font-size-32'}`} style={{ width: isDesktopOrLaptop ? '544px' : '280px' }}>
                    WHERE THE BEAT NEVER STOPS
                </h2>
                <p className={`color4 ${isDesktopOrLaptop ? 'font-size-16' : 'font-size-12'} home-page-intro-media-section-paragraph light-text`}>
                    We curate the ultimate Amapiano experience. From the vibrant streets of Cape Town to the turquoise waters of Zanzibar,
                    Amapiano Lifestyle brings together music lovers, ravers, and partygoers from all over the world.
                </p>
            </div>            
        </section>
    )
}

export default IntroMedia