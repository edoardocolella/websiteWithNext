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

function ExperienceCard(props: {
  experience: {
    it: {
      title: string
      description: string
    }
    en: {
      title: string
      description: string
    }
    startDate: string
    endDate?: string
  }
}) {
  const language = useContext(LanguageContext)
  const [showExperienceModal, setShowExperienceModal] = useState(false)

  const handleCloseExperienceModal = () => {
    setShowExperienceModal(false)
  }

  const handleShowExperienceModal = () => {
    setShowExperienceModal(true)
  }

  return (
    <>
      <ExperienceModal
        show={showExperienceModal}
        onClose={handleCloseExperienceModal}
        experience={props.experience}
      />
      <Col md={5} xl={6}>
        <Card className="mb-3 mt-4">
          <CardActionArea onClick={handleShowExperienceModal}>
            <Card.Body>
              <Card.Title>
                <Row className="top-row">
                  <Col>
                    {chooseWordForActualLanguage(
                      language,
                      props.experience.it.title,
                      props.experience.en.title,
                    )}
                  </Col>
                </Row>
              </Card.Title>
              <Row>
                <Col>
                  <FontAwesomeIcon icon={faCalendar} />
                  {' ' +
                    props.experience.startDate +
                    ' - ' +
                    (props.experience.endDate
                      ? props.experience.endDate
                      : chooseWordForActualLanguage(
                          language,
                          'In corso',
                          'In progress',
                        ))}
                </Col>
              </Row>
            </Card.Body>
          </CardActionArea>
        </Card>
      </Col>
    </>
  )
}
