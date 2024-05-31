// import '../styles/globals.css';
// import '@suiet/wallet-kit/style.css';
// import '../components/App.css';
// import type { AppProps } from 'next/app';


// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

import '../styles/globals.css';
import '@suiet/wallet-kit/style.css';
import '../components/App.css';
import type { AppProps } from 'next/app';
import ImageClassifier from "../components/ImageClassifier"; // Adjusted import path

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ImageClassifier />
    </>
  );
}
