//import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/myStile.css'
import '../styles/AppNavBar.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import type { AppProps } from 'next/app'
import { AppNavBar } from '@/components/AppNavBar'
import { MyFooter } from '@/components/MyFooter'
import { createContext, useState } from 'react'

export const LanguageContext = createContext('IT')
export function chooseWordForActualLanguage(
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
      <LanguageContext.Provider value={language}>
        <AppNavBar />
        <Component {...pageProps} />
        <MyFooter setItalian={setItalian} setEnglish={setEnglish} />
      </LanguageContext.Provider>
    </>
  )
}
