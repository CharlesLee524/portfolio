import Link from 'next/link';
import Header from '../components/Header';
import Global from '../components/Global';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div>
      <Header />
      <h2>This is the about page.</h2>
      <Link href="/"><a>Home</a></Link>
      <Footer />
      <Global />
    </div>
  );
}
