
import React, { useContext } from 'react'
import { Modal, Col, Row } from 'react-bootstrap'
import { chooseWordForActualLanguage, LanguageContext } from '../../pages/_app'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'


export function ExperienceModal(props: {
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
