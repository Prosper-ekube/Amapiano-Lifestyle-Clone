import { useMediaQuery } from 'react-responsive'
import Dj from '../../assets/images/Dj.png'
import outdoor_vibes from '../../assets/images/outdoor_vibes.png'
import club from '../../assets/images/club.png'
import party_shades from '../../assets/images/party_shades.png'
import red_cup from '../../assets/images/red_cup.png'

const Manifesto = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1024px)'
    })
    return (
        <section className={`home-page-manifesto-section`}>
            <div className={`align-items-center flex-row justify-content-space-between home-page-manifesto-images-container`}>
                <img alt='Dj' className={`home-page-manifesto-image`} src={Dj} />
                <img alt='Outdoor Party' className={`home-page-manifesto-image`} src={outdoor_vibes} />
                <img alt='Girl dancing in club' className={`home-page-manifesto-image`} src={club} />
            </div>
            <div className={`align-items-center color1 flex-column home-page-manifesto-section-text-container text-center`}>
                <img alt='Party Shades' className={`home-page-manifesto-section-party-shades`} src={party_shades} />
                <h2 className={`bold-text ${isDesktopOrLaptop ? 'font-size-82' : 'font-size-42'}`}>MORE THAN A GENRE, IT'S A LIFESTYLE</h2>
                <p className={`${isDesktopOrLaptop ? 'font-size-16' : 'font-size-12'} light-text`} style={{paddingTop: '10px'}}>
                    We don't just throw parties; we create immersive experiences that bring together the best of music,
                    dance,<br style={{display: isDesktopOrLaptop ? 'inline' : 'none'}}/> fashion, and community.
                </p>
                <p className={`${isDesktopOrLaptop ? 'font-size-16' : 'font-size-12'} light-text`}>
                    Amapiano, born from the streets of South Africa, is now a global movement that fuses house, jazz,
                    and the unmistakable African spirit into a powerful sound.
                </p>
                <img alt='Red Plastic Cup' className={`home-page-manifesto-section-red-cup`} src={red_cup} />
            </div>
        </section>
    )
}

export default Manifesto