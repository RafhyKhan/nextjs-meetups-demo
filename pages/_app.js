import Layout from '../components/layout/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <text>Hello there</text>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;