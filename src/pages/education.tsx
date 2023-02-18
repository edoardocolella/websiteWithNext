import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUserGraduate,
  faCalendar,
  faCity,
  faUpRightAndDownLeftFromCenter,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from 'react'
import Data from '../data/educationData.json'
import Image, { StaticImageData } from 'next/image'
import imageRummo from '../../public/images/rummo.jpg'
import imagePolito from '../../public/images/polito.png'
import { LanguageContext, chooseWordForActualLanguage } from './_app'

export default function EducationPage() {
  const language = useContext(LanguageContext)

  return (
    <Container className="text-center">
      <br />
      <h1>
        {chooseWordForActualLanguage(language, 'Educazione', 'Education')}
      </h1>
      <br />
      <SchoolCard data={Data.politoMag} image={imagePolito} />
      <br />
      <SchoolCard data={Data.politoTri} image={imagePolito} />
      <br />
      <SchoolCard data={Data.liceo} image={imageRummo} />
    </Container>
  )
}

function SchoolCard(props: {
  data: {
    it: {
      title: string
      description: any
      qual: string
    }
    en: {
      title: string
      description: any
      qual: string
    }
    startDate: string
    endDate?: string
    city: string
    grade?: string
  }
  image: StaticImageData
}) {
  const language = useContext(LanguageContext)
  const [showSchoolModal, setShowSchoolModal] = useState(false)

  const handleCloseSchoolModal = () => {
    setShowSchoolModal(false)
  }

  const handleShowSchoolModal = () => {
    setShowSchoolModal(true)
  }
  return (
    <>
      <SchoolModal
        data={props.data}
        image={props.image}
        show={showSchoolModal}
        onClose={handleCloseSchoolModal}
      />
      <Row className="justify-content-md-center">
        <Col md={10}>
          <Card>
            <Card.Body>
              <Card.Title>
                <Row className="top-row">
                  <Col className="text-end">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={handleShowSchoolModal}
                    >
                      <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
                    </Button>
                  </Col>
                </Row>
              </Card.Title>
              <Row>
                <Col>
                  <Image
                    src={props.image}
                    height={200}
                    width={400}
                    alt={'error'}
                  />
                </Col>
                <Col>
                  <Container className="text-center">
                    <Row>
                      <Col>
                        <strong>
                          {chooseWordForActualLanguage(
                            language,
                            'Istituto',
                            'Institute',
                          )}
                        </strong>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        {chooseWordForActualLanguage(
                          language,
                          props.data.it.title,
                          props.data.en.title,
                        )}
                      </Col>
                    </Row>
                    <p />
                    <Row>
                      <Col>
                        <strong>
                          {chooseWordForActualLanguage(
                            language,
                            'Titolo',
                            'Title',
                          )}
                        </strong>
                      </Col>
                    </Row>
                    <Row className="justify-content-center">
                      <Col md={8}>
                        {language === 'IT'
                          ? props.data.it.qual
                          : props.data.en.qual}
                      </Col>
                    </Row>
                    <p />

                    <Row>
                      <Col>
                        <strong>
                          {chooseWordForActualLanguage(
                            language,
                            'Voto',
                            'Mark',
                          )}
                        </strong>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        {props.data.grade
                          ? props.data.grade
                          : chooseWordForActualLanguage(
                              language,
                              'Non disponibile',
                              'Not available',
                            )}
                      </Col>
                    </Row>
                    <p />

                    <Row>
                      <Col>
                        <Container>
                          <Row>
                            <Col>
                              <strong>
                                {chooseWordForActualLanguage(
                                  language,
                                  'Città',
                                  'City',
                                )}
                              </strong>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <FontAwesomeIcon icon={faCity} />
                              {' ' + props.data.city}
                            </Col>
                          </Row>
                        </Container>
                      </Col>
                      <Col>
                        <Container>
                          <Row>
                            <Col>
                              <strong>
                                {chooseWordForActualLanguage(
                                  language,
                                  'Data',
                                  'Date',
                                )}
                              </strong>
                            </Col>
                          </Row>
                          <FontAwesomeIcon icon={faCalendar} />
                          {' ' +
                            props.data.startDate +
                            ' - ' +
                            (props.data.endDate
                              ? props.data.endDate
                              : chooseWordForActualLanguage(
                                  language,
                                  'in corso',
                                  'in progress',
                                ))}
                        </Container>
                      </Col>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

function SchoolModal(props: {
  show: boolean
  onClose: any
  data: {
    it: {
      title: string
      description: any
      qual: string
    }
    en: {
      title: string
      description: any
      qual: string
    }
    startDate: string
    endDate?: string
    city: string
    grade?: string
  }
  image: StaticImageData
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
        <Image src={props.image} height={200} width={400} alt={'error'} />
        <p />
        <Row className="justify">
          <Col>
            {chooseWordForActualLanguage(
              language,
              props.data.it.description,
              props.data.en.description,
            )}
          </Col>
        </Row>
        <p />
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
                    'in corso',
                    'in progress',
                  ))}
          </Col>
          <Col xs={4}>
            <FontAwesomeIcon icon={faCity} />
            {' ' + props.data.city}
          </Col>
        </Row>
        <Row>
          <Col>
            <FontAwesomeIcon icon={faUserGraduate} />
            {' ' +
              (props.data.grade
                ? props.data.grade
                : chooseWordForActualLanguage(
                    language,
                    'Non disponibile',
                    'Not available',
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
                <FontAwesomeIcon icon={faXmark} /> Close
              </Button>
            </Col>
          </Row>
        </Col>
      </Modal.Footer>
    </Modal>
  )
}
