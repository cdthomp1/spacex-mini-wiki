import Navigation from '../components/Navigation'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />

    </>
  )
}

export default MyApp
