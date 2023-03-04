import { Row } from 'react-bootstrap'
import { useContext } from 'react'
import ExperiencesData from '../data/experiencesData.json'
import { LanguageContext, chooseWordForActualLanguage } from './_app'
import { ExperienceCard } from '@/components/ExperiencePage/ExperienceCard'

export default function ExperiencesPage() {
  const language = useContext(LanguageContext)
  return (
    <>
      <br />
      <h1>
        {chooseWordForActualLanguage(language, 'Esperienze', 'Experiences')}
      </h1>
      <br />
      <h3>Eta Kappa Nu</h3>
      <Row className="d-flex justify-content-center">
        <ExperienceCard experience={ExperiencesData.hknPres} />
        <ExperienceCard experience={ExperiencesData.hknSite} />
      </Row>
      <br />
      <h3>Politecnico di Torino</h3>
      <Row className="d-flex justify-content-center">
        <ExperienceCard experience={ExperiencesData.collabINF} />
        <ExperienceCard experience={ExperiencesData.collanPT} />
      </Row>
      <Row className="d-flex justify-content-center">
        <ExperienceCard experience={ExperiencesData.collabProOgg} />
      </Row>
    </>
  )
}

