import SearchableEventList from './components/SearchableEventList';

export default async function Page({ searchParams }) {
  return (
    <section>
      <SearchableEventList query={searchParams?.query} />
    </section>
  );
}
