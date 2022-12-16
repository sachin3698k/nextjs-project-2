// import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthUserProvider } from "../context/AuthContext";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { AuthUserProvider } from '../context/AuthUserContext.jsxss';

function MyApp({ Component, pageProps }) {
  return (
    <AuthUserProvider>
      <ToastContainer position="top-center" />
      <Component {...pageProps} />
    </AuthUserProvider>
  );
}

export default MyApp;
