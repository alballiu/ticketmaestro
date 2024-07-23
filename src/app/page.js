import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";

function MyButton() {
  return <button>Click Here</button>
}


export default function Page() {
  return (
    <section>
      <Header />
      <List />
      <Footer />
    </section>
  );
}
