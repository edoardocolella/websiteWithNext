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
import { Container } from 'react-bootstrap'

export const LanguageContext = createContext('IT')
export function chooseWordForActualLanguage(
  language: string,
  italianWord: string,
  englishWord: string,
) {
  return language === 'IT' ? italianWord : englishWord
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
        <Container className="text-center">
          <Component {...pageProps} />
        </Container>
        <MyFooter setItalian={setItalian} setEnglish={setEnglish} />
      </LanguageContext.Provider>
    </>
  )
}
