import { useMediaQuery } from 'react-responsive'
import { FaXTwitter } from 'react-icons/fa6'
import { ImTelegram } from 'react-icons/im'
import { FaDiscord } from 'react-icons/fa'
import { BsMedium } from 'react-icons/bs'
import '../../styles/FooterStyles.css'

const Footer: React.FC = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1024px)'
    })
    return (
        <footer className={`flex-start color1 ${isDesktopOrLaptop ? 'flex-row justify-content-space-between' : 'flex-column'} footer`}>
            <div>
                <p className={`${isDesktopOrLaptop ? 'font-size-16' : 'font-size-12'} regular-text`}>©2025 Amapiano Lifestyle. All Right Reserved </p>
            </div>
            <div className={`flex-row`} style={{gap: isDesktopOrLaptop ? '20px' : '10px'}}>
                <FaXTwitter size={isDesktopOrLaptop ? '24px' : '16px'} />
                <ImTelegram size={isDesktopOrLaptop ? '24px' : '16px'} />
                <FaDiscord size={isDesktopOrLaptop ? '24px' : '16px'} />
                <BsMedium size={isDesktopOrLaptop ? '24px' : '16px'} />
            </div>
        </footer>
    )
}

export default Footer