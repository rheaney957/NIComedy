/* eslint-disable react/no-unescaped-entities */
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'

export interface AboutProps
{
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}


export default function About({ menu, setMenu }: AboutProps)
{
  return (
    <div className={styles.container}>
      {!menu && <div className={styles.backMobile} onClick={() => setMenu(true)}><i className="fa-solid fa-arrow-left"></i> </div>}
      <Header route='About' />

      <NavBar menu={menu} setMenu={setMenu} />

      <main className={!menu ? styles.main : styles.mainMobile}>
        <Layout title="About Us" FAQs={true}>
          <section className={styles.about}>
            <p>NI Comedy is Northern Ireland’s largest promoter of live comedy. Hosting tour shows in Belfast and regionally across Northern Ireland, we’ve hosted international acts such as KEVIN HART, TOM SEGURA, JOANNE MCNALLY, JOHN MULANEY, PAUL SMITH, DAVID O’DOHERTY, TIM DILLON, JIM JEFFERIES, LUCY BEAUMONT, NEIL DELAMERE, JONATHAN VAN NESS & many others. </p>

            <p>We are also tour promoter for fantastic Irish acts such as SHANE TODD, COLIN GEDDIS, SERENA TERRY, DIONA DOHERTY, PADDY RAFF, PADDY MCDONNELL, CIARAN BARTLETT, WILLIAM THOMPSON & MICKY BARTLETT to name a few. </p>

            <p>We’ve presented numerous live podcast shows, such as TEA WITH ME, THE GUILTY FEMINIST, THE GIRLS BATHROOM, SAVING GRACE, THE BOMB SQUAD, HOW DID THIS GET MADE?, GENERAL BANTER, THE USELESS HOTLINE & more</p>

            <p>We operate in venues across Northern Ireland, including Belfast's SSE Arena & Waterfront / Ulster Halls & Limelight venues, Derry’s Millennium Forum, and a huge amount of others across the country.</p>
          </section>
        </Layout>
      </main >

      <Footer menu={menu} />
    </div >
  )
}
