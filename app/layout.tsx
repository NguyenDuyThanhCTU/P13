import Loading from "@components/items/client-items/Loading";
import Fetch from "@components/items/server-items/Fetch";
import { AuthProviders } from "@context/AuthProviders";
import { DataProviders } from "@context/DataProviders";
import { StateProvider } from "@context/StateProvider";
import "@styles/global.css";
import { GoogleTagManager } from "@next/third-parties/google";
import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>hihi</title>
      </Head>
      <body>
        <StateProvider>
          <DataProviders>
            <AuthProviders>
              <Fetch />
              <Loading />
              <>{children}</>
              <GoogleTagManager gtmId="GTM-52VRDDW4" />
            </AuthProviders>
          </DataProviders>
        </StateProvider>
      </body>
    </html>
  );
}
