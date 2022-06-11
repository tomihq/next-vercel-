import Head from 'next/head'
import { Navbar } from '../../components/ui/Navbar';
import styles from './MainLayout.module.css';
export const MainLayout = ({children}) => {
  return (
    <div className={styles.container}>
    <Head>
      <title>Tomi</title>
      <meta name="description" content=" Page" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Navbar/>

    <main className={styles.main}>

     {children}

    </main>

  </div>
  )
}
