import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css'
import Header from '@/compnenets/Header/header';
import Footer from '@/compnenets/Footer';
import Watchlist from '@/compnenets/watchliststate/watchlist';
import Changepage from '@/compnenets/changepage/changepage';
import Profilestate from "@/compnenets/Profilestate";
import  I18nextProvider from "@/compnenets/i18nprovider";
import Playlist from '@/compnenets/Playlist/PLaylist';
const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Movies',
  description: 'Movies Tv',
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <ToastContainer theme='colored' position='top-center' />
        <main>
        <Profilestate>
          <Changepage>
       <Playlist>
       <Watchlist>
          {children}
          </Watchlist>
       </Playlist>
          </Changepage>
          </Profilestate> 
        </main>
        <Footer />
        <I18nextProvider/>
      </body>
    </html>
  )
}