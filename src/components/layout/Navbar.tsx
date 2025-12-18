import { useMediaQuery } from 'react-responsive'
import { RxHamburgerMenu } from 'react-icons/rx'
import '../../styles/NavbarStyles.css'
import amapiano_lifestyle_icon from '../../assets/images/amapiano_lifestyle_icon.png'

const Navbar: React.FC = () => {
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 1024px)'
	})
	return (
		<nav className={`align-items-center flex-row justify-content-space-between navbar`}>
			<img alt='Amapiano Lifestyle Icon' className={`align-items-center flex-row justify-content-center navbar-amapiano-lifestyle-icon`} src={amapiano_lifestyle_icon} />
			<div className={`align-items-center flex-row justify-content-center navbar-hamburger-menu-container`}>
				<RxHamburgerMenu size={`${isDesktopOrLaptop ? '24px' : '12px'}`} style={{ backgroundColor: '#FFFFFF' }}/>
			</div>
		</nav>
  	)
}

export default Navbar