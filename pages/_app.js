import "../styles/globals.css";
import {
  createClient,
  configureChains,
  defaultChains,
  WagmiConfig,
} from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { SessionProvider } from "next-auth/react";
import CssBaseline from "@mui/material/CssBaseline";
import Layout from "../components/Layout/Layout";
import { MarketplaceProvider } from "../context/MarketplaceContext";
import { AuthProvider } from "../context/AuthContext";

const { provider, webSocketProvider } = configureChains(defaultChains, [
  publicProvider(),
]);

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <WagmiConfig client={client}>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <AuthProvider>
          <MarketplaceProvider>
            <CssBaseline />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </MarketplaceProvider>
        </AuthProvider>
      </SessionProvider>
    </WagmiConfig>
  );
};

export default MyApp;
