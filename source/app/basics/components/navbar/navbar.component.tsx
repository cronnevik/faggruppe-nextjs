import Link from 'next/link';
import styles from './navbar.module.scss'
import UlrikenLogo from '@/app/shared/components/ulriken-logo/ulriken-logo.compontent';

const BasicNavbar = () => {
    return (
        <nav role="navigation" aria-label="navigasjonsfelt" className={styles.navbar}>
            <UlrikenLogo width={150} height={75} />
            <div className={styles['navbar-menu']}>
                <div className={styles['navbar-start']}>
                    <Link className={styles['navbar-item']} href="/">Hjem</Link>
                    <Link className={styles['navbar-item']} href="/basics/konsulenter-ssg">SSG</Link>
                    <Link className={styles['navbar-item']} href="/basics/konsulenter-ssr">SSR</Link>
                    <Link className={styles['navbar-item']} href="/basics/konsulenter-isr">ISR</Link>
                </div>
                <div className={styles['.navbar-end']}>Test</div>
            </div>
        </nav>
    )
}
export default BasicNavbar;