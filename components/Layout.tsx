
/* eslint-disable react-hooks/rules-of-hooks */
import styles from '../styles/Layout.module.css'
import { FC, ReactNode, HTMLAttributes, useState, useEffect, HTMLInputTypeAttribute } from 'react';
import React from 'react';
import Card from './Card';
import DatePicker from "react-datepicker";
import { format } from 'date-fns'
import dateIcon from '/public/images/calender.jpeg';

import "react-datepicker/dist/react-datepicker.css";
import Carousel from './Carousel';

export type LayoutPropTypes = HTMLAttributes<HTMLElement> & {
  title: string;
  FAQs?: boolean;
  children?: ReactNode | undefined;
  data?: any;
}

const Layout: FC<LayoutPropTypes> = ({
  title,
  FAQs = false,
  children,
  data,
}) =>
{
  const [stateDate, setstateDate] = useState<string>();
  const currDate = new Date();
  const [featuredGigsData, setfeaturedGigsData] = useState<any[]>();
  const [dateField, setDateField] = useState(undefined);
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [isLoading, setLoading] = React.useState(false)

  const imagePerRow = 5;

  const [next, setNext] = useState(imagePerRow);
  const handleMoreImage = () =>
  {
    setNext(next + imagePerRow);
  };


  React.useEffect(() =>
  {

    setLoading(true)
    const ms = Date.now();
    fetch('/JSON/featuredGigs.json?dummy=' + ms, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) =>
      {

        setfeaturedGigsData(data)
        setLoading(false)
      })
  }, [])


  useEffect(() => { setHydrated(true); }, []);

  if (!hydrated) {
    return null;
  }

  //  typeof document  === "object"  && document!.getElementById("dateSearch")!.style.backgroundImage = `url('${cal.src}')`;
  const datepicker = typeof document === "object" && document!.getElementById("dateSearch");

  datepicker && (datepicker.style.backgroundImage = `url('${dateIcon.src}')`);

  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) =>
  {
    const el = (document.getElementById('dateSearch') as HTMLInputElement);

    setDateField(undefined);
    if (el) {
      el.value = '';
    } else {
      new Error("No date field found");
    }

    setSearchField(e.target.value);
    if (e.target.value === "") {
      setSearchShow(false);
    }
    else {
      setSearchShow(true);
    }
  };

  const handleDateChange = (date: Date | React.SetStateAction<Date> | null) =>
  {
    setSearchField('');
    const el = (document.getElementById('search') as HTMLInputElement);
    if (el) {
      el.value = '';
    } else {
      new Error("No search field found");
    }

    // @ts-ignore
    date && setDateField(date);
    date && setstateDate(format(date as Date, 'yyyy-MM-dd'));
    if (date === null) {
      setSearchShow(false);
    }
    else {
      setSearchShow(true);
    }
  };

  const filteredData = data?.filter(
    (gig: {
      id: number;
      title: string;
      venue: string;
      subTitle?: string;
      startDate: {
        date: Date;
      }
      pricing?: string;
      isSoldOut?: boolean;
      doors?: string;
      websiteImage?: string;
      ticketsUrl: string;
    }) =>
    {
      return (
        gig
          ?.title
          ?.toLowerCase()
          ?.includes(searchField.toLowerCase())
      );
    }
  );

  const filteredDateData = data?.filter(
    (gig: {
      id: number;
      title: string;
      venue: string;
      subTitle?: string;
      startDate: {
        date: Date;
      }
      pricing?: string;
      isSoldOut?: boolean;
      doors?: string;
      websiteImage?: string;
      ticketsUrl: string;
    }) =>
    {
      return (
        stateDate && gig.startDate.date.toString().split(" ")[0].match(stateDate.toString())
      );
    }
  );

  const filtered = filteredData?.map((gig: any) =>
  {
    return (<Card
      key={gig.id}
      gig={{
        time: gig?.doors,
        startDate: gig?.startDate,
        name: gig?.title,
        support: gig?.subTitle,
        location: gig?.venue,
        websiteImage: gig?.websiteImage,
        ticketsUrl: gig?.ticketsUrl,
        status: gig?.isSoldOut
      }}
    />);
  });

  const filteredDate = filteredDateData?.map((gig: any) =>
    <Card
      key={gig?.id}
      gig={{
        time: gig?.doors,
        startDate: gig?.startDate,
        name: gig?.title,
        support: gig?.subTitle,
        location: gig?.venue,
        websiteImage: gig?.websiteImage,
        ticketsUrl: gig?.ticketsUrl,
        status: gig?.isSoldOut
      }}
    />);
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.searchDate}>
          {!FAQs &&
          <div className={styles.DatepickerContainer}>
            <DatePicker className="myDatePicker" id='dateSearch' popperPlacement="bottom-end" popperModifiers={[
              {
                name: 'arrow',
                options: { padding: 220 },
              },
            ]} placeholderText='Search By Date' dateFormat="dd/MM/yyyy" selected={dateField} onChange={(date) => date && handleDateChange(date)} />
            </div>}
          <div className={`${styles.searchText} ${FAQs && styles.searchTextNone}`} >
            {!FAQs && <input type="search" id='search' placeholder='Search by Artist' onChange={handleChange} />}
          </div>
          <ul className={styles.socialsList}>
            <li><span className={styles.followUS}>FOLLOW US ON  <i className="fa fa-chevron-right" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></span></li>
            <li><a href="https://www.facebook.com/comedybelfast/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook"></i></a></li>
            <li><a href="https://www.instagram.com//belfastcomedy/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
          </ul>
        </div>
        <div className={styles.emptyContainer}/>
        <div className={styles.header}>{title}</div>
        <div className={styles.featured}>Featured</div>
        <div className={styles.cardsGigs}>
          {searchShow ? (searchField ?
            (<>{filtered}</>)
            :
            (dateField &&
              (<>{filteredDate}</>)
            )
          )
            :
            children}

        </div>
        <div className={styles.cardsFeatured}>
          <Carousel />
        </div>
      </div>
    </main>
  );
}

export default Layout;
