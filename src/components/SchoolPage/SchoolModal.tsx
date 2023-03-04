import React, { useContext } from 'react'
import { Modal, Col, Row } from 'react-bootstrap'
import { chooseWordForActualLanguage, LanguageContext } from '../../pages/_app'
import { CardMedia } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faCity, faUserGraduate } from '@fortawesome/free-solid-svg-icons'


export function SchoolModal(props: {
    show: boolean
    onClose: any
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
      </Modal>
    )
  }
  