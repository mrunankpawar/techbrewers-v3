import Navbar from '@/components/Navbar';
import FooterNew from '@/components/FooterNew';

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      {children}
      <FooterNew />
    </div>
  );
}
