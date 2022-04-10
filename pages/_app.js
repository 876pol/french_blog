import Layout from '../components/layout';
import Head from 'next/head'

import '../styles/globals.css';
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>No et Moi Blog</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
export default MyApp;