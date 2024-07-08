/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import button from '../styles/Button.module.css';
import formStyles from '../styles/Form.module.css';
import Script from 'next/script'
<Script src="/api/contact.php"/>

export interface BookingsProps
{
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}


export default function Bookings({ menu, setMenu }: BookingsProps)
{
  const [contact, setContact] = React.useState({
    companyName: "",
    email: "",
    eventDates: "",
    location: "",
    price: "",
    guestCount: "",
    techProvisions: "",
    timings: "",
    lineup: "",
  });

  const [submitForm, setSubmit] = React.useState(false);

  const handleChange = (att: string, value: string) => {
    att === "companyName" && setContact({ ...contact, companyName: value })
    att === "email" && setContact({ ...contact, email: value });
    att === "eventDate" && setContact({ ...contact, eventDates: value });
    att === "location" && setContact({ ...contact, location: value });
    att === "price" && setContact({ ...contact, price: value });
    att === "guestCount" && setContact({ ...contact, guestCount: value });
    att === "techProvisions" && setContact({ ...contact, techProvisions: value });
    att === "timings" && setContact({ ...contact, timings: value });
    att === "lineup" && setContact({ ...contact, lineup: value });

  };

  React.useEffect(() =>
  {
    const form = document.getElementById('example_form');
    form?.addEventListener('submit', function (event) {
      event.preventDefault();

    });

    if (submitForm){
      postData({contact});
  }
  }, [submitForm])

  async function postData(formattedFormData: any ){

    const response = await fetch('/api/contact.php', {
      method: 'POST',
      body: JSON.stringify(formattedFormData)
    });
    const data = await response.json();
    console.log('tsx',{data});
}

  return (
    <div className={styles.container}>
      {!menu && <div className={styles.backMobile} onClick={() => setMenu(true)}><i className="fa-solid fa-arrow-left"></i> </div>}
      <Header route='Corporate Bookings' />

      <NavBar menu={menu} setMenu={setMenu} />

      <main className={!menu ? styles.main : styles.mainMobile}>
        <Layout title="Corporate Bookings" FAQs={true}>
          <section className={styles.about}>
            <p>
              We facilitate the booking of a wide range of comedians, hosts, and DJs for corporate and other private event appearances - including but not limited to Shane Todd, Colin Geddis, Pete Snodden, Serena Terry, Paddy Raff, Ciarán Bartlett, Paddy McDonnell, Micky Bartlett, Emer Maguire, William Thompson, and Aaron Butler.
            </p>

            <p className={styles.bookingText}>
              For all enquiries, please reach out to corporate@tswmgmt.com with the following information on your proposed event:
            </p>

            <form id="example_form" action="/api/contact.php" method="POST" className={`${formStyles.form} ${formStyles.booking}`}>
              {!submitForm ?
                <>
                  <div><label>Company Name: <input type="text" name='companyName' id='companyName' placeholder='Company Name *' onChange={(e) => handleChange('companyName', (e.target.value).toString())} /></label></div>
                  <div><label>Email: <input type="email" id='email' name='email' placeholder='Email address *' onChange={(e) => handleChange('email', (e.target.value).toString())} /></label></div>
                  <div><label>Event Date: <input type="text" name='eventDate' id='eventDate' placeholder='Event Date(s)' onChange={(e) => handleChange('eventDate', (e.target.value).toString())} /></label></div>
                  <div><label>Location: <input type="text" name='location' id='location' placeholder='Location' onChange={(e) => handleChange('location', (e.target.value).toString())} /></label></div>
                  <div><label>Admission Price: <input type="text" name='price' id='price' placeholder='Admission Price' onChange={(e) => handleChange('price', (e.target.value).toString())} /></label></div>
                  <div><label>Proposed Guest Count: <input type="text" name='guestCount' id='guestCount' placeholder='No. of Guest' onChange={(e) => handleChange('guestCount', (e.target.value).toString())} /></label></div>
                  <div><label>Tech Provisions: <textarea name='techProvisions' id='techProvisions' placeholder=' Tech Provision' onChange={(e) => handleChange('techProvisions', (e.target.value).toString())} ></textarea></label></div>
                  <div><label>Timings: <input type="text" name='timings' id='timings' placeholder='Timings' onChange={(e) => handleChange('timings', (e.target.value).toString())} /></label></div>
                  <div><label>Proposed Lineup: <textarea id='lineup' name='lineup' placeholder='Proposed Lineup' onChange={(e) => handleChange('lineup', (e.target.value).toString())} ></textarea></label></div>
                   <div className={styles.submit}>
                    <label>
                      <button className={button.primary} type="submit" name="submit" onClick={() => setSubmit(true)}>Submit</button>

                    </label>
                  </div>
                </>
                : <><h2>Success</h2>
                  <p>Thank you for contacting us. We will be in touch with you shortly with your enquiry.</p></>
              }
            </form>

            <ol className={styles.terms} >
              <li>Sending this offer does not guarantee your booking; the Artist must first accept your offer.</li>
              <li>If Artist accepts your offer and the show is confirmed, the confirmation is a binding and enforceable agreement.            </li>
              <li>All shows are subject to contract -  appearances are not confirmed until contract is signed. </li>
              <li>All artwork must be approved in writing by TSW Mgmt ahead of any publicity.</li>
            </ol>
          </section>
        </Layout>
      </main >

      <Footer menu={menu} />
    </div >
  )
}
