import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Router } from "next/router";
import ProgressBar from "@badrap/bar-of-progress";
import AuthProvider from "../context/AuthProvider";
const progress = new ProgressBar({
  size:4,
  color:'#E50914',
  className:'z-50',
  delay:100
});

Router.events.on('routeChangeStart',progress.start)
Router.events.on('routeChangeComplete',progress.finish)
Router.events.on('routeChangeError',progress.finish)
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
