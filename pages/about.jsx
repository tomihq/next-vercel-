import Link from 'next/link'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout'
import styles from '../styles/About.module.css'
export default function About()  {
    return (
     <>
            <h1> About Page </h1>
            <h1 className={styles.title}>
              Ir a <Link href="/">Home</Link>
            </h1>
            
            <p className={styles.description}>
              Get started by editing {' '}
              <code className={styles.code}>pages/about.js</code>
            </p>
        </>
    
      )
}

About.getLayout = function getLayout(page){
  return (
    <MainLayout>
    <DarkLayout>
      {page}
    </DarkLayout>
    </MainLayout>
 )
}