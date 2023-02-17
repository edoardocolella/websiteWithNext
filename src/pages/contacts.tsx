import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faInstagram,
  faLinkedin,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Container, ListGroup, Row } from 'react-bootstrap'
import { useContext } from 'react'
import { LanguageContext, choiseWordForActualLanguage } from './_app'

export default function ContactsPage() {
  const language = useContext(LanguageContext)

  return (
    <Container>
      <br />
      <h2 className="center">{language === 'IT' ? 'Contatti' : 'Contacts'}</h2>
      <Row className="me-3 justify-content-center">
        <br />
        <Col xl={4}>
          <ListGroup>
            <ListGroup.Item className="align-items-center center p-3">
              <FontAwesomeIcon icon={faEnvelope} />{' '}
              <a
                className="nodec"
                href="mailto:edoardocolella.it@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                edoardocolella.it@gmail.com
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="align-items-center center p-3">
              <FontAwesomeIcon icon={faLinkedin} />{' '}
              <a
                className="nodec"
                href="https://www.linkedin.com/in/edoardo-colella-inf/"
                target="_blank"
                rel="noreferrer"
              >
                {'Edoardo Colella'}
              </a>
            </ListGroup.Item>

            <ListGroup.Item className="align-items-center center p-3">
              <FontAwesomeIcon icon={faTelegram} />{' '}
              <a
                className="nodec"
                href="https://telegram.me/edoardocolella"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                {'@edoardocolella'}
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="align-items-center center p-3">
              <FontAwesomeIcon icon={faInstagram} />{' '}
              <a
                className="nodec"
                href="https://www.instagram.com/edoardo_colellaa/"
                target="_blank"
                rel="noreferrer"
              >
                {'@edoardo_colella'}
              </a>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}
