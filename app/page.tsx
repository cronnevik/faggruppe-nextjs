import styles from './page.module.scss'
import 'materialize-css/dist/css/materialize.min.css';
import Link from 'next/link'

export default function HomePage() {
  return (
  <>
    <div className={styles['homepage-container']}>
      <h1>Nextjs faggruppe</h1>
      <div className={styles['homepage-card-container']}>
        <div className={[styles['card-props'], "card"].join(" ")}>
          <div className="card-content white-text">
            <span className="card-title">Basics</span>
            <p>
              Grunnleggende Next.js features
            </p>
          </div>
          <div className="card-action">
            <Link href="/basics">Gå til Basics siden</Link>
          </div>
      
        </div>
          <div className={[styles['card-props'], "card"].join(" ")}>
            <div className="card-content white-text">
              <span className="card-title">Material Design</span>
              <p>
                Bruk av eksternt React component biliotek
              </p>
            </div>
            <div className="card-action">
            <Link href="/mui">Gå til Material Design siden</Link>
            </div>
          </div>
      </div>
    </div>
  </>
  )
}
