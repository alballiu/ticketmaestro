import SearchableEventList from "./components/EventList";

export default async function Page({searchParams}) {

  return <section>
    <SearchableEventList query={searchParams?.query} />
  </section>

}
