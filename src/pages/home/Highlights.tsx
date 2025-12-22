import { useMediaQuery } from 'react-responsive'
import home_page_light_fixture from '../../assets/images/home_page_light_fixture.png'
import sharing_drinks_club from '../../assets/images/sharing_drinks_club.png'
import girl_holding_beer from '../../assets/images/girl_holding_beer.png'
import girl_laughing from '../../assets/images/girl_laughing.png'
import girls_outdoor_snacks from '../../assets/images/girls_outdoor_snacks.png'
import woman_laughing from '../../assets/images/woman_laughing.png'
import girl_guy_smiling from '../../assets/images/girl_guy_smiling.png'

const Highlights: React.FC = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1024px)'
    })
    return (
        <section className={`home-page-highlights-section`}>
            <img alt='Light Fixture' className={`home-page-lighting-fixture`} src={home_page_light_fixture} style={{ marginBottom: '20px', width: '100%' }} />
            <div className={`align-items-center home-page-highlights-section-main-content ${isDesktopOrLaptop ? 'flex-row justify-content-center' : 'flex-column'}`}>
                <div className='marquee' style={{ height: isDesktopOrLaptop ? '750px' : '500px' }}>
                    <div className='flex-column marquee-track-vertical' style={{ gap: '20px' }}>
                        <div className={`align-items-center flex-column home-page-highlights-section-marquee-image-container justify-content-center marquee-content`}>
                            <img alt='' className={`home-page-highlights-section-marquee-image`} src={sharing_drinks_club} />
                            <img alt='' className={`home-page-highlights-section-marquee-image`} src={girl_holding_beer} />
                            <img alt='' className={`home-page-highlights-section-marquee-image`} src={girl_laughing} />
                        </div>
                        <div className={`align-items-center flex-column home-page-highlights-section-marquee-image-container justify-content-center marquee-content`}>
                            <img alt='' className={`home-page-highlights-section-marquee-image`} src={sharing_drinks_club} />
                            <img alt='' className={`home-page-highlights-section-marquee-image`} src={girl_holding_beer} />
                            <img alt='' className={`home-page-highlights-section-marquee-image`} src={girl_laughing} />
                        </div>
                    </div>
                </div>
                <div className={`align-items-center flex-column home-page-highlights-section-text-container text-center`}>
                    <h2 className={`align-items-center color4 extra-bold-text flex-column ${isDesktopOrLaptop ? 'font-size-58' : 'font-size-32'} text-center`}>
                        <span className='color7'>HIGHLIGHTS</span> FROM PAST EVENTS
                    </h2>
                    <p className={`${isDesktopOrLaptop ? 'font-size-16' : 'font-size-12'} light-text`}>Relieve every single moment and enjoy the memory made</p>
                </div>
                <div className='marquee' style={{ height: isDesktopOrLaptop ? '750px' : '500px' }}>
                    <div className='flex-column marquee-track-vertical' style={{ gap: '20px' }}>
                        <div className={`align-items-center flex-column home-page-highlights-section-marquee-image-container justify-content-center marquee-vertical`}>
                            <img alt='' className={`home-page-highlights-section-marquee-image`} src={girls_outdoor_snacks} />
                            <img alt='' className={`home-page-highlights-section-marquee-image`} src={woman_laughing} />
                            <img alt='' className={`home-page-highlights-section-marquee-image`} src={girl_guy_smiling} />
                        </div>
                        <div className={`align-items-center flex-column home-page-highlights-section-marquee-image-container justify-content-center marquee-vertical`}>
                            <img alt='' className={`home-page-highlights-section-marquee-image`} src={girls_outdoor_snacks} />
                            <img alt='' className={`home-page-highlights-section-marquee-image`} src={woman_laughing} />
                            <img alt='' className={`home-page-highlights-section-marquee-image`} src={girl_guy_smiling} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Highlights