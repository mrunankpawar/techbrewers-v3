import Head from 'next/head';
import Community from "@/components/Community";
import Script from 'next/script';

function page() {
  return (
    <>
    <Head>
        <title>Club TechBrewers</title>
        <meta name="description" content="Club TechBrewers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        {/* Open Graph / Social media meta tags */}
        <meta property="og:title" content="Club TechBrewers" />
        <meta property="og:description" content="Get to know about the journey of TechBrewers" />
        <meta property="og:url" content="https://techbrewers.org/community" />
        <meta property="og:image" content="/images/ogimagecommunity.jpg" />
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-MZEN1DZW0S" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'YOUR_GOOGLE_ANALYTICS_ID');  // Replace with your Google Analytics ID
        `}
      </Script>
    <div>
      <Community />
    </div>
    </>
  )
}

export default page 