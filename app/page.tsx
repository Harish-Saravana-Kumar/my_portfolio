// app/page.js (for App Router) or pages/index.js (for Pages Router)
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Footer />
    </main>
  );
}
