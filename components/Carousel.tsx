import '@coreui/coreui/dist/css/coreui.min.css'
import { Children, HTMLAttributes, ReactNode, useEffect, useState } from 'react';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import React from 'react';
import Loading from './Loading';
import Link from 'next/link';


export default function Carousel()
{
  const [featuredGigsData, setfeaturedGigsData] = useState<any[]>();
  const [hydrated, setHydrated] = useState(false);
  const [isLoading, setLoading] = React.useState(false)

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

  if (isLoading) return <Loading />

  if (!hydrated) {
    return null;
  }
  return (
    <>
      <CCarousel controls transition="crossfade">
        {featuredGigsData && (featuredGigsData.slice(0, 2)).map((gig: any, index: number) => (
          <CCarouselItem key={index}>
            <Link
              href={gig.link ?? 'https://www.ticketmaster.ie/'}
            >
              <CImage id={gig.name} className="d-block w-100" style={{ 'minHeight': '325px', 'height': '325px' }} src={`/featured/${gig.image}`} alt="slide 1" />
            </Link>
          </CCarouselItem>
        ))}
      </CCarousel>
      <CCarousel controls transition="crossfade">
        {featuredGigsData && (featuredGigsData.slice(2, 4)).map((gig: any, index: number) => (
          <CCarouselItem key={index}>
            <Link
              href={gig.link ?? 'https://www.ticketmaster.ie/'}
            >
              <CImage id={gig.name} className="d-block w-100" style={{ 'minHeight': '325px', 'height': '325px' }} src={`/featured/${gig.image}`} alt="slide 1" />
            </Link>
          </CCarouselItem>
        ))}
      </CCarousel>
    </>
  )
}
