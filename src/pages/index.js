import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon 2.0</title>
      </Head>
     
     {/* Header */ }
      <Header />

    <main className="max-w-7xl mx-auto">
     { /* Banner */ }

     <Banner />


      {/* Products Container */ }
    </main>

    </div>
  );
}
