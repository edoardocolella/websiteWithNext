import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faCompass,
  faUserGraduate,
  faBriefcase,
  faProjectDiagram,
  faLightbulb,
  faAddressCard,
  faMailBulk,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons'
import {
  Button,
  Col,
  Container,
  Navbar,
  Offcanvas,
  Row,
  ListGroup,
} from 'react-bootstrap'
import { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { chooseWordForActualLanguage, LanguageContext } from '../pages/_app'

export function AppNavBar() {
  let [showSidebar, setShowSidebar] = useState(false)
  const router = useRouter()

  let handleMenuClick = () => {
    setShowSidebar(true)
  }

  let handleCloseClick = () => {
    setShowSidebar(false)
  }

  let handlePageSelect = function (page: any) {
    setShowSidebar(false)
    router.replace(page)
  }
  const language = useContext(LanguageContext)

  return (
    <>
      <Navbar bg="transparent" className="mountain-bg font-weight-bold">
        <Container fluid className="d-flex justify-content-center">
          <Row className="navbar-items d-flex justify-content-between">
            <Col
              xs={1}
              className="d-flex align-items-center justify-content-center"
            >
              <Button variant="navbar" onClick={handleMenuClick}>
                <FontAwesomeIcon icon={faBars} />
              </Button>
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
              <Button
                variant="navbar"
                size="lg"
                onClick={() => router.replace('/')}
              >
                Edoardo Colella
              </Button>
            </Col>
            <Col xs={1} />
          </Row>
        </Container>
      </Navbar>
      <SideBar
        language={language}
        show={showSidebar}
        pageSelect={handlePageSelect}
        onHide={handleCloseClick}
      />
    </>
  )
}

function SideBar(props: {
  language: string
  pageSelect: (arg0: string) => void
  show: boolean
  onHide: () => void
}) {

  const language = props.language

  let selectEmpty = function () {
    props.pageSelect('/')
  }
  let selectEducation = function () {
    props.pageSelect('/education')
  }
  let selectExperiences = function () {
    props.pageSelect('/experiences')
  }
  let selectProjects = function () {
    props.pageSelect('/projects')
  }
  let selectSkills = function () {
    props.pageSelect('/skills')
  }
  let selectContacts = function () {
    props.pageSelect('/contacts')
  }

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('EdoardoColella.pdf').then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob)
        // Setting various property values
        let alink = document.createElement('a')
        alink.href = fileURL
        alink.download = 'EdoardoColella.pdf'
        alink.click()
      })
    })
  }

  return (
    <Offcanvas show={props.show} onHide={props.onHide}>
      <Offcanvas.Header closeButton>
        <h1>Explore</h1>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <ListGroup variant="flush">
          <SideBarElement
            icon={faCompass}
            name="About"
            onButtonClick={selectEmpty}
          />
          <SideBarElement
            icon={faUserGraduate}
            name={chooseWordForActualLanguage(
              language,
              'Educazione',
              'Education',
            )}
            onButtonClick={selectEducation}
          />
          <SideBarElement
            icon={faBriefcase}
            name={chooseWordForActualLanguage(
              language,
              'Esperienze',
              'Experiences',
            )}
            onButtonClick={selectExperiences}
          />
          <SideBarElement
            icon={faProjectDiagram}
            name={chooseWordForActualLanguage(language, 'Progetti', 'Projects')}
            onButtonClick={selectProjects}
          />
          <SideBarElement
            icon={faLightbulb}
            name="Skills"
            onButtonClick={selectSkills}
          />
          <SideBarElement
            icon={faMailBulk}
            name={chooseWordForActualLanguage(language, 'Contatti', 'Contacts')}
            onButtonClick={selectContacts}
          />
          <SideBarElement
            icon={faAddressCard}
            name={chooseWordForActualLanguage(
              language,
              'Curriculum vitae',
              'Resume',
            )}
            onButtonClick={onButtonClick}
          />
        </ListGroup>
      </Offcanvas.Body>
    </Offcanvas>
  )
}

function SideBarElement(props: {
  icon: IconDefinition
  name: string
  onButtonClick: () => void
}) {
  return (
    <ListGroup.Item action onClick={props.onButtonClick}>
      <Container className="sidebar-item">
        <FontAwesomeIcon icon={props.icon} /> {props.name}
      </Container>
    </ListGroup.Item>
  )
}
