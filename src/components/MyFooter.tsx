import { US, IT } from 'country-flag-icons/react/3x2'
import { useContext } from 'react'
import { LanguageContext, chooseWordForActualLanguage } from '../pages/_app'
export function MyFooter(props: { setEnglish: any; setItalian: any }) {
  const language = useContext(LanguageContext)

  const setNewLanguage = function () {
    language === 'IT' ? props.setEnglish() : props.setItalian()
  }

  return (
    <footer className="page-footer font-small blue pt-4">
      <div className="footer-copyrFight text-center py-3">
        {chooseWordForActualLanguage(
          language,
          'Questo sito non raccoglie alcun dato personale - ',
          'This website does not collect any personal data - ',
        )}
        {'© 2023 Copyright: '}
        <a href="https://edoardocolella.it/">edoardocolella.it</a>
        {' - '}
        {language === 'IT' ? (
          <US
            height={20}
            onClick={setNewLanguage}
            style={{ cursor: 'pointer' }}
          />
        ) : (
          <IT
            height={20}
            onClick={setNewLanguage}
            style={{ cursor: 'pointer' }}
          />
        )}
      </div>
    </footer>
  )
}
