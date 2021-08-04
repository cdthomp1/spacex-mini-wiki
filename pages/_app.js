import Navigation from '../components/Navigation'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
