// import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthUserProvider } from "../context/AuthContext";
import '../styles/globals.css';
// import { AuthUserProvider } from '../context/AuthUserContext.jsxss';

function MyApp({ Component, pageProps }) {
  return <AuthUserProvider><Component {...pageProps} /></AuthUserProvider>
}

export default MyApp