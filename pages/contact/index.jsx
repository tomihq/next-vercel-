import Link from 'next/link'
import { DarkLayout } from '../../components/layouts/DarkLayout'
import { MainLayout } from '../../components/layouts/MainLayout'
import styles from '../../styles/Contact.module.css'
export default function Contact()  {
    return (
      <MainLayout>
            <h1> Contact Page </h1>
            <h1 className={styles.title}>
              Ir a <Link href="/">Home</Link>
            </h1>
            <p className={styles.description}>
              Get started by editing {' '}
              <code className={styles.code}>pages/contact/contact.js</code>
            </p>
        </MainLayout>
      )
}

Contact.getLayout = function getLayout(page){
  return (
    <MainLayout>
      {page}
    </MainLayout>
 )
}