import Head from 'next/head';
import ExpandableCards from '@/components/ExpandableCards';

export default function LivestreamsPage() {
  return (
    <>
      <Head>
        <title>YouTube Livestreams | TechThrusters Events</title>
        <meta
          name="description"
          content="Rewatch TechThrusters recorded talks and community sessions on YouTube."
        />
        <meta property="og:url" content="https://techthrusters.org/events/livestreams" />
        <meta property="og:title" content="YouTube Livestreams | TechThrusters Events" />
      </Head>
      <ExpandableCards />
    </>
  );
}
