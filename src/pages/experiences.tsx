import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'
import { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faXmark } from '@fortawesome/free-solid-svg-icons'
import Data from '../data/experiencesData.json'
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
        <ExperienceCard data={Data.hknPres} />
        <ExperienceCard data={Data.hknSite} />
      </Row>
      <br />
      <h3>Politecnico di Torino</h3>
      <Row className="d-flex justify-content-center">
        <ExperienceCard data={Data.collabINF} />
        <ExperienceCard data={Data.collanPT} />
      </Row>
    </Container>
  )
}

function ExperienceCard(props: {
  data: {
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
        data={props.data}
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
                      props.data.it.title,
                      props.data.en.title,
                    )}
                  </Col>
                </Row>
              </Card.Title>
              <Row>
                <Col>
                  <FontAwesomeIcon icon={faCalendar} />
                  {' ' +
                    props.data.startDate +
                    ' - ' +
                    (props.data.endDate
                      ? props.data.endDate
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
  data: {
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
            props.data.it.title,
            props.data.en.title,
          )}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="justify">
          <Col>
            {chooseWordForActualLanguage(
              language,
              props.data.it.description,
              props.data.en.description,
            )}
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <FontAwesomeIcon icon={faCalendar} />
            {' ' +
              props.data.startDate +
              ' - ' +
              (props.data.endDate
                ? props.data.endDate
                : chooseWordForActualLanguage(
                    language,
                    'In corso',
                    'In progress',
                  ))}
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
          <Row xs={2}>
            <Col>
              <Button
                className="me-1"
                variant="secondary"
                onClick={props.onClose}
              >
                <FontAwesomeIcon icon={faXmark} />{' '}
                {chooseWordForActualLanguage(language, 'Chiudi', 'Close')}
              </Button>
            </Col>
          </Row>
      </Modal.Footer>
    </Modal>
  )
}
