import 'bootstrap/dist/css/bootstrap.css';
import Ad from '../components/ad';

import '../styles/globals.css';

export default function SoccerTable({ Component, pageProps }) {
  return (
    <>
    <Ad />
    <Component {...pageProps} />
    </>
  )
}
