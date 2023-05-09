import Link from 'next/link';
import styles from './navbar.module.scss'
import Image from 'next/image';
import { NavbarProps } from './navbar.types';

const BasicNavbar = ({mainTitle, items: navbarLinkItems}: NavbarProps) => {
    return (
        <nav role="navigation" aria-label="navigasjonsfelt" className={[styles['navbar-props'], "nav-wrapper"].join(" ")}>
            <Image priority src="/images/ulriken-logo.svg" alt='Ulriken Consulting Logo' width={150} height={75} />
            <div className='brand-logo' style={{marginLeft: '50px'}}>
                { mainTitle }
            </div>
            <ul className="right hide-on-med-and-down">
                {
                    navbarLinkItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={styles['navbar-item']} href={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}
export default BasicNavbar;