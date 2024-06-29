import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/NavBar.module.css';
import { SetStateAction } from 'react';
import Footer from './Footer';
import buttonStyles from '../styles/Button.module.css'

export interface NavBarProps {
    menu: boolean;
    setMenu: React.Dispatch<SetStateAction<boolean>>;
}

export default function NavBar({menu, setMenu}: NavBarProps)
{

    const [click, setClick] = React.useState(false);
    const router = useRouter();

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);

    return (
        <div>
            <div className={menu ? styles.mainContainer :  styles.mainContainerMobile} onClick={() => Close()} />
            <ul  className={menu ? styles.SocialsContainerMobile :  styles.SocialsContainer}>
            <li><a href="https://www.facebook.com/comedybelfast/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook"></i></a></li>
            <li><a href="https://www.instagram.com/belfastcomedy/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
          </ul>


            <nav className={styles.navbar} onClick={e => e.stopPropagation()}>
             <div className={menu ? styles.navContainer :  styles.navContainerMobile}>
                    <ul className={styles.navMenu}>
                        <li className={styles.navItem}  onClick={() => setMenu(false)}>
                            <Link
                                href="./"
                                legacyBehavior
                                className={router.pathname == "/" ? (styles.navLinks, styles.active) : styles.navLinks}
                            >
                                Comedy Shows
                            </Link>
                        </li>

                        <li className={styles.navItem} onClick={() => setMenu(false)}>
                            <Link
                                legacyBehavior
                                href="./about"
                                className={router.pathname == "/" ? (styles.navLinks, styles.active) : styles.navLinks}
                            >
                                {"About"}
                            </Link>
                        </li>
                        <li className={styles.navItem} onClick={() => setMenu(false)}>
                            <Link
                                legacyBehavior
                                href="./comedy-gallery"
                                className={router.pathname == "/" ? (styles.navLinks, styles.active) : styles.navLinks}
                            >
                                {"Gallery"}
                            </Link>
                        </li>
                        <li className={styles.navItem} onClick={() => setMenu(false)}>
                            <Link
                                legacyBehavior
                                href="./contact-us"
                                className={router.pathname == "/" ? (styles.navLinks, styles.active) : styles.navLinks}
                            >
                                {"Contact"}
                            </Link>
                        </li>
                        <li className={styles.navItem} onClick={() => setMenu(false)}>
                            <Link
                                legacyBehavior
                                href="http://www.tswmgmt.com"
                                className={router.pathname == "/" ? (styles.navLinks, styles.active) : styles.navLinks}
                            >
                                {"TSW Mgmt"}
                            </Link>
                        </li>
                    </ul>
                    <div  className={menu ? styles.formContainerMobile :  styles.formContainer}>
                        <form id="subscribe-form" action="//www.venuecloud.net/s/f/27/17" method="POST" className={styles.footerForm}>
                            <input type="hidden" name="contact_permission" value="yes"/>
                            <input className={styles.mailingList} type="text" name="email" placeholder="Email"required  />
                            <input type="hidden" id="source" name="source" value="website"/>
                            <input className={buttonStyles.primary} value='Join' type="submit" name="btnSubmit" />
                            <span>Join our mailing list or follow our social channels for first announcement on all shows</span>
                        </form>
                    </div>
                </div>
            </nav >
            {menu && <div className={styles.navFooter}><Footer /></div>}
        </ div >
    );
}
