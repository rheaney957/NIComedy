/* eslint-disable @next/next/no-img-element */

import Head from 'next/head'
import styles from '../styles/Home.module.css'
import buttonStyles from '../styles/Button.module.css'
import Logo from '/public/images/NICOMEDY.png'
import Link from 'next/link';
export interface HeadProps {
  route: string;
}

export default function Header(props: HeadProps)
{
  return (
    <>
    <Head>
      <title>Belfast Comedy</title>
    </Head >
          <header className={styles.header}>
          <div className={styles.shineLogo}>
          <Link href="./"><img style={{width: '300px'}} src={Logo.src} alt="shine-logo" /></Link>
          </div>
          <div className={styles.socials}>
          <form id="subscribe-form" action="//www.venuecloud.net/s/f/27/17" method="POST" className={styles.footerForm}>
	          <input type="hidden" name="contact_permission" value="yes"/>
            <input className={styles.mailingList} type="text" name="email" placeholder="Email"required  />
            <input type="hidden" id="source" name="source" value="website"/>
            <input className={buttonStyles.primary} value='Join' type="submit" name="btnSubmit" />
            <span>Join our mailing list or follow our social channels for first announcement on all shows</span>
          </form>
          </div>
        </header>
        </>
  )
}
