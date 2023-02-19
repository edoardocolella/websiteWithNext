import React, { useContext, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { LanguageContext, chooseWordForActualLanguage } from '../../pages/_app'
import { SchoolModal } from './SchoolModal'
import { CardActionArea, CardMedia } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faCity } from '@fortawesome/free-solid-svg-icons'

export function SchoolCard(props: {
    data: {
      image: string
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
          show={showSchoolModal}
          onClose={handleCloseSchoolModal}
        />
        <Col md={10} xl={6}>
          <Card className="mb-3 mt-4">
            <CardActionArea onClick={handleShowSchoolModal}>
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
                  <Row className="justify-content-center">
                    <Col md={10}>
                      {chooseWordForActualLanguage(
                        language,
                        props.data.it.qual,
                        props.data.en.qual,
                      )}
                    </Col>
                  </Row>
                </Card.Title>
                <Row>
                  <p />
                  <CardMedia
                    alt={chooseWordForActualLanguage(
                      language,
                      props.data.it.title,
                      props.data.en.title,
                    )}
                    component="img"
                    style={{ maxWidth: '100%', height: 'auto' }}
                    image={props.data.image}
                  />
                </Row>
                <br />
                <Row>
                  <Col md={4}>
                    <Row>
                      <Col>
                        <strong>
                          {chooseWordForActualLanguage(language, 'Voto', 'Mark')}
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
                  </Col>
                  <Col md={3}>
                    <Row>
                      <Col>
                        <strong>
                          {chooseWordForActualLanguage(language, 'Città', 'City')}
                        </strong>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <FontAwesomeIcon icon={faCity} />
                        {' ' + props.data.city}
                      </Col>
                    </Row>
                  </Col>
                  <Col md={5}>
                    <Row>
                      <Col>
                        <strong>
                          {chooseWordForActualLanguage(language, 'Data', 'Date')}
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
                  </Col>
                </Row>
              </Card.Body>
            </CardActionArea>
          </Card>
        </Col>
      </>
    )
  }