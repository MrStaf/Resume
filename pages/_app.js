import '../styles/globals.css'
import { Router } from 'next/dist/client/router'
import NProgress from 'nprogress'
import "nprogress/nprogress.css"


NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => {
  NProgress.start();
})
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
})
Router.events.on('routeChangeError', () => {
  NProgress.remove();
})
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} className="w-full h-full" />
}

export default MyApp
