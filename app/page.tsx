import styles from './page.module.scss'
import Link from 'next/link'

export default function Home() {
  return (
  <>
    <ul className={styles.list}>
      <li><Link href="/basics">Basics</Link></li>
      <li><Link href="/mui">MUI</Link></li>
    </ul>
  </>
  )
}
