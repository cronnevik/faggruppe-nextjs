import Image from 'next/image';
import UcLogo from './/Ulriken_C_logo_white_rgb.svg';

interface UlrikenLogoProps {
    width: number,
    height: number;
}

const UlrikenLogo = ({width, height}: UlrikenLogoProps) => {
    return (<Image priority src={UcLogo} alt='Ulriken Consulting Logo' width={width} height={height} />)
}

export default UlrikenLogo;