/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect, Suspense } from 'react';
import homeStyles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
// import galleryInfo from '../public/gallery/galleryInfo.json';
import styles from '../styles/Gallery.module.css'
import Loading from '../components/Loading';

export interface GalleryProps {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface imagesProps {
  images?: {
    title: string;
    subtitle: string;
    img: string;
  }[]
}


const RenderImage = ({images}: imagesProps) =>
{
  return (
    <>
      {images?.map((img, i) => (
        <div key={i} className={styles.imgBox}>
          <Image loading='eager' src={`/gallery/${img.img}`} alt={img.title} height={325} width={425} />
          <div className={styles.transparentBox}>
            <div className={styles.caption}>
              <p>{img.title}</p>
              <p className={styles.opacityLow}>{img.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};


export default function Gallery({ menu, setMenu }: GalleryProps)
{
  const [galleryImages, setGalleryImages] = useState<any[]>();
  const [loading, setLoading] = useState(false);

  useEffect(() =>
  {
    setLoading(true)
    const ms = Date.now();
    fetch('/JSON/galleryInfo.json?dummy=' + ms, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) =>
      {

        setGalleryImages(data)
        setLoading(false)
      })
  }, [])

  if (loading) return <Loading/>

  return (
    <div className={homeStyles.container}>
      {!menu && <div className={homeStyles.backMobile} onClick={() => setMenu(true)}><i className="fa-solid fa-arrow-left"></i> </div>}
      <Header route='Gallery' />

      <NavBar menu={menu} setMenu={setMenu} />

      <main className={!menu ? homeStyles.main : homeStyles.mainMobile}>
        <Layout title="Gallery" FAQs={true}>
          <Suspense fallback={<Loading />}>
            <div className={homeStyles.gallery}>
            <div className={styles.galleryImage}>
              <RenderImage images={galleryImages  && galleryImages} />
            </div>
            </div>
          </Suspense>
        </Layout>
      </main >

      <Footer menu={menu} />
    </div >
  )
}
