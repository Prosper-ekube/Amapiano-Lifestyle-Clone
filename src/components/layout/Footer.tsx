import { useMediaQuery } from 'react-responsive'
import { FaXTwitter } from 'react-icons/fa6'
import { ImTelegram } from 'react-icons/im'
import { FaDiscord } from 'react-icons/fa'
import { BsMedium } from 'react-icons/bs'
import Button from '../Button'
import '../../styles/FooterStyles.css'
import party_shades from '../../assets/images/party_shades.png'

const Footer: React.FC = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1024px)'
    })
    return (
        <footer className={`footer`}>
            <div className={`align-items-center color1 flex-column footer-section-0 text-center`}>
                <img alt='Party Shades' className={`footer-party-shades`} src={party_shades} />
                <h2 className={`bold-text ${isDesktopOrLaptop ? 'font-size-64' : 'font-size-32'}`}>READY FOR THE MOST EPIC PARTY OF THE YEAR?</h2>
                <p className={`${isDesktopOrLaptop ? 'font-size-18' : 'font-size-14'} light-text`}>
                    Do you have questions or inquiries, or want to chat about our upcoming events?
                </p>
                <Button text={'Contact Us'} />
            </div>
            <div className={`flex-start color1 ${isDesktopOrLaptop ? 'flex-row justify-content-space-between' : 'flex-column'} footer-section-1`}>
                <div>
                    <p className={`${isDesktopOrLaptop ? 'font-size-16' : 'font-size-12'} regular-text`}>©2025 Amapiano Lifestyle. All Right Reserved </p>
                </div>
                <div className={`flex-row`} style={{ gap: isDesktopOrLaptop ? '20px' : '10px' }}>
                    <FaXTwitter size={isDesktopOrLaptop ? '24px' : '16px'} />
                    <ImTelegram size={isDesktopOrLaptop ? '24px' : '16px'} />
                    <FaDiscord size={isDesktopOrLaptop ? '24px' : '16px'} />
                    <BsMedium size={isDesktopOrLaptop ? '24px' : '16px'} />
                </div>
            </div>
        </footer>
    )
}

export default Footer