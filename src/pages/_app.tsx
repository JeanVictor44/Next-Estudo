import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import '../styles/global.scss'
import { Header } from '@/components/Header'

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  style: ['normal'],
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family:${roboto.style.fontFamily};
        }
      `}</style>
      
      <Header />
      <Component {...pageProps} />
      
    </>
    
  )

}
