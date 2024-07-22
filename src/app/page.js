import SearchableEventList from './components/SearchableEventList';
import SearchBar from './components/SearchBar';
import Link from 'next/link';

export default async function Page({ searchParams }) {
  return (
    <>
      <header>
        <SearchBar />
      </header>
      <section>
        <SearchableEventList query={searchParams?.query} />
      </section>
    </>
  );
}
