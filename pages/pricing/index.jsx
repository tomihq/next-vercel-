
import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'
import styles from '../../styles/Contact.module.css'
export default  function Pricing(){
  return (
    <MainLayout>
        <h1> Pricing Page </h1>
        <h1 className={styles.title}>
        Ir a <Link href="/">Home</Link>
        </h1>
        <p className={styles.description}>
        Get started by editing {' '}
        <code className={styles.code}>pricing/pricing.js</code>
        </p>
        </MainLayout>

  )
}

Pricing.getLayout = function getLayout(page){
    return (
      <MainLayout>
        {page}

      </MainLayout>
   )
  }
