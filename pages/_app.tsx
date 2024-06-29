/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "../styles/globals.css";
// import bg1 from "../public/images/comedyBackground1.jpg";
import bg2 from "../public/images/comedyBackground2.jpg";
import bg3 from "../public/images/comedyBackground3.jpg";
import bg4 from "../public/images/comedyBackground4.jpg";


import type { AppProps } from "next/app";
import Head from "next/head";

export const bgImageArr = [
  bg2.src,
  bg3.src,
  bg4.src,
];

export default function App({ Component, pageProps }: AppProps)
{
  const [menu, setMenu] = React.useState(true);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() =>
  {
    const intervalId = setInterval(() =>
    {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bgImageArr.length);
    }, 4000);

    return () =>
    {
      clearInterval(intervalId);
    };
  }, [bgImageArr]);

  const currentImage = bgImageArr[currentImageIndex];
  typeof document !== "undefined"
    ? (document.body.style.backgroundImage = `url(${currentImage})`)
    : null;

  React.useEffect(() => { }, [menu]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>
      <Component menu={menu} setMenu={setMenu} {...pageProps} />
      <div
        style={{
          backgroundImage: `url(${bgImageArr[0]}), url(${bgImageArr[1]}), url(${bgImageArr[2]});`,
        }}
      />
    </>
  );
}
