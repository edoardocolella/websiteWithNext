import { Card, Col, Container, Modal, Row } from 'react-bootstrap'
import { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import ExperiencesData from '../data/experiencesData.json'
import { LanguageContext, chooseWordForActualLanguage } from './_app'
import { CardActionArea } from '@mui/material'

export default function ExperiencesPage() {
  const language = useContext(LanguageContext)
  return (
    <Container className="text-center">
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
    </Container>
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

function ExperienceModal(props: {
  show: boolean
  onClose: () => void
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

  return (
    <Modal show={props.show} onHide={props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {chooseWordForActualLanguage(
            language,
            props.experience.it.title,
            props.experience.en.title,
          )}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="justify">
          <Col>
            {chooseWordForActualLanguage(
              language,
              props.experience.it.description,
              props.experience.en.description,
            )}
          </Col>
        </Row>
        <br />
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
      </Modal.Body>
    </Modal>
  )
}
