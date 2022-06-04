import Layout from '../components/Layout'
import '../styles/globals.css';
import '../styles/navbar.css';
import '../styles/register.css';
import '../styles/footer.css';
import '../styles/profile.css';
import '../styles/home.css';



function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
