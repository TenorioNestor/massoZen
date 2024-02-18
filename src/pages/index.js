import Header from '../componets/Header'
import Footer from '../componets/Footer'
import Banner from '../componets/Banner'

export default function Home() {
  return (
    <>
      <main >
        <Header />
        <Banner/>
        <div>
          <h1>Meio</h1>
        </div>
        <Footer/>
      </main>
    </>
  );
}
