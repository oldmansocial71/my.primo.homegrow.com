import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Primo Homegrow App</title>
        <meta
          name='description'
          content='A NextJs application for growing weed.'
        />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        />
      </Head>

      <main>main</main>

      <footer>footer</footer>
    </div>
  );
}
