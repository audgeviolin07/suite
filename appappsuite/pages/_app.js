import "@/styles/globals.css";
import '@suiet/wallet-kit/style.css';
import { WalletProvider } from '@suiet/wallet-kit'; // Import WalletProvider

export default function App({ Component, pageProps }) {
  return (
    <WalletProvider>
      <Component {...pageProps} />
    </WalletProvider>
  );
}


// import "@/styles/globals.css";
// import '@suiet/wallet-kit/style.css';
// import { WalletProvider } from '@suiet/wallet-kit';
// import WalletComponent from '../components/WalletComponent';

// export default function App({ Component, pageProps }) {
//   return (
//     <WalletProvider>
//       <WalletComponent />
//       <Component {...pageProps} />
//     </WalletProvider>
//   );
// }
