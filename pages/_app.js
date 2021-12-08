import '../styles/globals.css'
import '../styles/fun.css'
import '../styles/index.css'
import Layout from '../components/Layout'
import Head from 'next/head';
function MyApp({ Component, pageProps }) {

  return(
    <Layout>
      <Head>
       
      </Head>
    <Component {...pageProps} />
  </Layout>
  )
 
}

export default MyApp
