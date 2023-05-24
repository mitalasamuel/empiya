import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Buy from './hero/buy'
import Sidebar from './hero/sidebar'
import { Box, Divider } from '@mui/material'
import HeroText from './hero/HeroText'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Empiya | Send and receive money</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box display={['block','block','flex']} justifyContent='space-between'padding={['2rem 0','3rem 0']}>
          <Sidebar />
          <Buy />
          <HeroText />
        </Box>
        <Box padding={['1rem 2rem', '1rem 2rem', '1rem 12rem']}>
                <Divider color='#323a40' sx={{ borderBottomWidth: '.1px' }} />
            </Box>
             </main>
    </>
  )
}
