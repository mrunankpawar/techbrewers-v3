import Head from 'next/head';
import PartnerEvents from '@/components/PartnerEvents';

export default function PartnerEventsPage() {
  return (
    <>
      <Head>
        <title>Partner Events | TechThrusters</title>
        <meta
          name="description"
          content="Events and meetups TechThrusters is partnering with alongside other developer communities."
        />
        <meta property="og:url" content="https://techthrusters.org/events/partners" />
        <meta property="og:title" content="Partner Events | TechThrusters" />
      </Head>
      <PartnerEvents />
    </>
  );
}
