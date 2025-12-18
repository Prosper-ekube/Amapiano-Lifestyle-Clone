import { useMediaQuery } from 'react-responsive'
import Button from '../../components/Button'
import '../../styles/HomeStyles.css'
import palm_frond from '../../assets/images/palm_fronds.png'

const Hero = () => {
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 1024px)'
	})
	return (
		<div className={`home-page-hero-section`} style={{ position: 'relative' }}>
			<div className={`align-items-center flex-column justify-content-center`} style={{ gap: '10px', position: 'relative', zIndex: '2' }}>
				<h3 className={`bold-text color5 ${isDesktopOrLaptop ? 'font-size-32' : 'font-size-14'}`}>IT'S NOT A GENRE.</h3>
				<h1 className={`color3 extra-bold-text ${isDesktopOrLaptop ? 'font-size-160' : 'font-size-52'} text-center`}
					style={{ lineHeight: '80%', width: isDesktopOrLaptop ? '827px' : '265px' }}>
					IT'S A LIFESTYLE
				</h1>
				<p className={`color2 ${isDesktopOrLaptop ? 'font-size-18' : 'font-size-12'} regular-text text-center`}
					style={{ width: isDesktopOrLaptop ? '457px' : '240px' }}>
					Amapiano isn't just a music genre; it's an entire lifestyle that
					transcends boundaries, bringing rhythm, culture, and unforgettable memories together.
				</p>
				<Button style={{ marginTop: isDesktopOrLaptop ? '50px' : '25px' }} text={'Join The Lifestyle'} blackBgWhiteText />
			</div>
			<img alt='Palm Fronds' className={`home-page-hero-section-palm-fronds home-page-hero-section-palm-fronds-right`} src={palm_frond} />
			<img alt='Palm Fronds' className={`home-page-hero-section-palm-fronds home-page-hero-section-palm-fronds-left`} src={palm_frond} />
		</div>                
  	)
}

export default Hero