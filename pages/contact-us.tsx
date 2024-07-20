
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactUsForm from '../components/ContactUsForm'

export interface ContactUsProps {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ContactUs({menu, setMenu}: ContactUsProps)
{
  return (
    <div className={styles.container}>
      {!menu && <div className={styles.backMobile} onClick={()=> setMenu(true)}><i className="fa-solid fa-arrow-left"></i> </div>}
     <Header route='Contact Us'/>
      <NavBar menu={menu} setMenu={setMenu}/>
      <main className={!menu ? styles.main : styles.mainMobile}>
        <Layout title="Contact Us" FAQs={true}>
          <section className={styles.contact}>
            <ContactUsForm/>
          </section>
        </Layout>
        </main>
        <Footer menu={menu}/>
    </div>
  )
}
