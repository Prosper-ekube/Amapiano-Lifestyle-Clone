import { useMediaQuery } from 'react-responsive';
import '../styles/ButtonStyles.css'

interface ButtonProps {
    blackBgWhiteText?: boolean;    
    style?: React.CSSProperties
    text: string;
    width?: string;
}

const Button: React.FC<ButtonProps> = ({ blackBgWhiteText, style, text, width }) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1024px)'
    })
    return (
        <button className={`align-items-center button flex-row ${isDesktopOrLaptop ? 'font-size-16' : 'font-size-12'} semi-bold-text`}
            style={{
                backgroundColor: blackBgWhiteText ? '#000000' : '#F8FBFF',
                color: blackBgWhiteText ? '#F8FBFF' : '#000000', width: width ?? 'auto', ...style
            }}>
            {text}
        </button>
    )
}

export default Button