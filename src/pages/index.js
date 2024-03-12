import Header from '../componets/Header'
import Footer from '../componets/Footer'
import Banner from '../componets/Banner'
import Localizacao from '@/componets/Localizacao';
import CardApp from '@/componets/CardApp';
import Head from 'next/head'

export default function Home() {
  return (
    <>
     <Head>
        <title>Massozen</title>
        <meta name="description" content="Site oficial Massozen" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
