import Head from 'next/head';
import Events from '@/components/Events';

export default function UpcomingEventsPage() {
  return (
    <>
      <Head>
        <title>Upcoming Events | TechThrusters</title>
        <meta
          name="description"
          content="Upcoming TechThrusters workshops, meetups, and community sessions."
        />
        <meta property="og:url" content="https://techthrusters.org/events/upcoming" />
        <meta property="og:title" content="Upcoming Events | TechThrusters" />
      </Head>
      <Events />
    </>
  );
}
