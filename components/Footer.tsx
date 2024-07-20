
import styles from '../styles/Home.module.css'
import buttonStyles from '../styles/Button.module.css'

import Link from 'next/link'
import { useRouter } from 'next/router';

export interface FooterProps
{
  menu?: boolean;
}

export default function Footer(props: FooterProps)
{
  const router = useRouter();
  return (
    <footer className={`${styles.footer} ${props.menu && styles.footerMobile}`} >
      <div className={styles.footerDetails}>
        <div className={styles.footerLinks}>
          <ul className={styles.footerRoutes}>
            <li>
              <Link
                href="./"
                className={router.pathname == "/" ? (styles.navLinks, styles.active) : styles.navLinks}
              >
                Comedy Shows
              </Link>
            </li>
            <li>
              <Link
                href="./about"
                className={router.pathname == "/" ? (styles.navLinks, styles.active) : styles.navLinks}
              >
                {`About`}
              </Link>
            </li>
            <li>
              <Link
                href="./comedy-gallery"
                className={router.pathname == "/" ? (styles.navLinks, styles.active) : styles.navLinks}
              >
                {`Gallery`}
              </Link>
            </li>
            <li>
              <Link
                href="./contact-us"
                className={router.pathname == "/" ? (styles.navLinks, styles.active) : styles.navLinks}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="./bookings"
                className={router.pathname == "/" ? (styles.navLinks, styles.active) : styles.navLinks}
              >
                {`Corporate Bookings`}
              </Link>
            </li>
          </ul>
          <ul className={styles.footerSocialsList}>
            <li><a href="https://www.facebook.com/comedybelfast" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com/belfastcomedy/" target="_blank" rel="noreferrer">Instagram</a></li>
            <li>
              <Link
                href="./privacy-policy"
                className={router.pathname == "/" ? (styles.navLinks, styles.active) : styles.navLinks}
              >
                Privacy Policy
              </Link>
            </li>

          </ul>

        </div>
        <div className={styles.footerMailing}>
          <div className={styles.footerCopyright}>TSW Management Limited Copyright {new Date().getFullYear()} </div>


        </div>
      </div>
      <div className={styles.footerFeat}> </div>
    </footer>
  )
}
