import '@/styles/globals.css'
import { Box } from '@mui/system'
import Footer from '../../Component/Footer'
import Navbar from '../../Component/New'
import 'firebase/auth';
import { ThemeProvider } from '@mui/material/styles';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import theme from '@/styles/theme';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3pfpJaCHj-PvT0BKoQ6Idrr1c1DsYMlY",
  authDomain: "empiya-e78ea.firebaseapp.com",
  projectId: "empiya-e78ea",
  storageBucket: "empiya-e78ea.appspot.com",
  messagingSenderId: "608156601828",
  appId: "1:608156601828:web:86a3e14c82154c1ac24bf1",
  measurementId: "G-XMDKZFL1CC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </ThemeProvider>)
}
// 181c1f