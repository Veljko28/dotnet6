import Layout from '../components/Layout'
import '../styles/globals.css';
import '../styles/navbar.css';
import '../styles/register.css';
import '../styles/footer.css';
import '../styles/profile.css';
import '../styles/home.css';
import '../styles/jobs.css';
import { Provider } from 'react-redux';
import store from '../redux/store'



function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp
