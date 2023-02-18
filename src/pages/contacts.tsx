import { faEnvelope, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import {
  faInstagram,
  faLinkedin,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, ListGroup, Row } from 'react-bootstrap'
import { useContext } from 'react'
import { chooseWordForActualLanguage, LanguageContext } from './_app'
export default function ContactsPage() {
  const language = useContext(LanguageContext)

  return (
    <>
      <br />
      <h2 className="center">
        {chooseWordForActualLanguage(language, 'Contatti', 'Contacts')}
      </h2>
      <Row className="justify-content-center">
        <br />
        <Col md={5} xl={4}>
          <ListGroup>
            <MyLink
              icon={faEnvelope}
              href="mailto:edoardocolella.it@gmail.com"
              customLink="edoardocolella.it@gmail.com"
            />
            <MyLink
              icon={faLinkedin}
              href="https://www.linkedin.com/in/edoardo-colella-inf/"
              customLink="Edoardo Colella"
            />
            <MyLink
              icon={faTelegram}
              href="https://telegram.me/edoardocolella"
              customLink="@edoardocolella"
            />
            <MyLink
              icon={faInstagram}
              href="https://www.instagram.com/edoardo_colellaa/"
              customLink="@edoardo_colella"
            />
          </ListGroup>
        </Col>
      </Row>
    </>
  )
}

function MyLink(props: {
  href: string
  customLink: string
  icon: IconDefinition
}) {
  return (
    <ListGroup.Item className="align-items-center center p-3">
      <FontAwesomeIcon icon={props.icon} />{' '}
      <a className="nodec" href={props.href} target="_blank" rel="noreferrer">
        {props.customLink}
      </a>
    </ListGroup.Item>
  )
}
