import Navbar from '@/components/Navbar';
import FooterNew from '@/components/FooterNew';

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="gradient-background min-h-screen">
      <Navbar />
      <div className="pt-24 md:pt-28">{children}</div>
      <FooterNew />
    </div>
  );
}
