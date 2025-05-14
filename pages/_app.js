import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, user-scalable=yes, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="preload" href="/fonts/EuclidSquare-Bold.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/EuclidSquare-BoldItalic.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/EuclidSquare-Italic.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/EuclidSquare-Light.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/EuclidSquare-LightItalic.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/EuclidSquare-Medium.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/EuclidSquare-MediumItalic.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/EuclidSquare-Regular.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/EuclidSquare-SemiBold.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/EuclidSquare-SemiBoldItalic.woff" as="font" type="font/woff" crossOrigin="anonymous" /> */}
        {/* <meta property="og:url" content={""} />
        <meta property="og:image" content="/starter.png" />
        <meta property="og:site_name" content="Starter" />
        <link rel="icon" type="image/png" href="/g16X16.png" sizes="16x16" />
        <link rel="icon" type="image/png" href="/g32X32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/g96X96.png" sizes="96x96" />
        <link rel="apple-touch-icon" href="/apple120X120.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple180X180.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple152X152.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/apple167X167.png" />
        <meta name="theme-color" content="#2563EB" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href={`https://starter.tech${!router.asPath.includes("blog") ? "/" + router.locale : ""}${router.asPath}`} /> */}

      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
