//import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/myStile.css'
import '../styles/AppNavBar.css'

import type { AppProps } from 'next/app'
import { AppNavBar } from '@/components/AppNavBar'
import { MyFooter } from '@/components/MyFooter'
import { createContext, useState } from 'react'

export const LanguageContext = createContext("IT")
export function choiseWordForActualLanguage(
  language: string,
  italianWord: string,
  englishWord: string,
) {
  return language == 'IT' ? italianWord : englishWord
}

export default function App({ Component, pageProps }: AppProps) {
  let [language, setLanguage] = useState('EN')

  let setItalian = function () {
    setLanguage('IT')
  }

  let setEnglish = function () {
    setLanguage('EN')
  }

  return (
    <>
      <AppNavBar />
      <LanguageContext.Provider value={language}>
        <Component {...pageProps} />
        <MyFooter setItalian={setItalian} setEnglish={setEnglish} />
      </LanguageContext.Provider>
    </>
  )
}
