import Link from 'next/link';
import styles from './navbar.module.scss'
import Image from 'next/image';

const BasicNavbar = () => {
    return (
        <nav role="navigation" aria-label="navigasjonsfelt" className={[styles['navbar-props'], "nav-wrapper"].join(" ")}>
            <Image priority src="/images/ulriken-logo.svg" alt='Ulriken Consulting Logo' width={150} height={75} />
            
            <ul className="right hide-on-med-and-down">
                <li><Link className={styles['navbar-item']} href="/">HOME</Link></li>
                <li><Link className={styles['navbar-item']} href="/basics/konsulenter-ssg">SSG</Link></li>
                <li><Link className={styles['navbar-item']} href="/basics/konsulenter-ssr">SSR</Link></li>
                <li><Link className={styles['navbar-item']} href="/basics/konsulenter-isr">ISR</Link></li>
                <li><Link className={styles['navbar-item']} href="/basics/konsulenter-streaming">STREAMING</Link></li>
                <li><Link className={styles['navbar-item']} href="/basics/konsulenter-client">CLIENT</Link></li>
            </ul>
        </nav>
    )
}
export default BasicNavbar;