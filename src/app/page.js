import EventList from './components/EventList.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

export default function Page() {
  return (
    <section>
      <Header />
      <EventList />
      <Footer />
    </section>
  );
}
