import '@/styles/globals.css'
import { Box } from '@mui/system'
import Footer from '../../Component/Footer'
import Navbar from '../../Component/New'

export default function App({ Component, pageProps }) {
  return <>
      <Box backgroundColor='#181c1f'>  <Navbar/>
<Component {...pageProps} />
<Footer/></Box></>
}
