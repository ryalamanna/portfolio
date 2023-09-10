import Image from 'next/image'
import styles from './page.module.css'
import Banner from './components/Banner/Banner'
import KnowMe from './components/KnowMe/KnowMe'
export default function Home() {
  return (
    <div className="globalContainer">
      <main className={styles.main}>
        <Banner/>
        <KnowMe/>
      </main>
    </div>
    
  )
}
