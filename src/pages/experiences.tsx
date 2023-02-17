import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'
import { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendar,
  faUpRightAndDownLeftFromCenter,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import Data from '../data/experiencesData.json'
import { LanguageContext, chooseWordForActualLanguage } from './_app'

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
      <ExperienceCard data={Data.hknPres} />
      <br />
      <ExperienceCard data={Data.hknSite} />
      <br />
      <h3>Politecnico di Torino</h3>
      <ExperienceCard data={Data.collabINF} />
      <br />
      <ExperienceCard data={Data.collanPT} />
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
      <Row className="justify-content-md-center">
        <Col md={10}>
          <Card>
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

                  <Col className="text-end">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={handleShowExperienceModal}
                    >
                      <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
                    </Button>
                  </Col>
                </Row>
              </Card.Title>
              <Row>
                <Col xs={6}>
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
          </Card>
        </Col>
      </Row>
    </>
  )
}

function ExperienceModal(props: {
  show: boolean | undefined
  onClose: any
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
          {language === 'IT' ? props.data.it.title : props.data.en.title}
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
        <Col>
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
        </Col>
      </Modal.Footer>
    </Modal>
  )
}
