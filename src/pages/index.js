import Header from '../componets/Header'
import Footer from '../componets/Footer'
import Banner from '../componets/Banner'
import Localizacao from '@/componets/Localizacao';
import CardApp from '@/componets/CardApp';

export default function Home() {
  return (
    <>
      <main >
        <Header />
        <Banner/>
        <CardApp/>
        <Localizacao/>
        <Footer/>
      </main>
    </>
  );
}
