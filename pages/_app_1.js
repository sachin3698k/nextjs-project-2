import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer position='top-center' />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
