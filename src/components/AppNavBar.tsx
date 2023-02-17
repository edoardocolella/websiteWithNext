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
import {
  JSXElementConstructor,
  ReactElement,
  useContext,
  useState,
} from 'react'
import { useRouter } from 'next/router'
import { LanguageContext } from '../pages/_app' 

export function AppNavBar() {
  //let navigate = useNavigate()
  let [showSidebar, setShowSidebar] = useState(false)
  const router = useRouter();

  const language = useContext(LanguageContext)


  let handleMenuClick = () => {
    setShowSidebar(true)
  }

  let handleCloseClick = () => {
    setShowSidebar(false)
  }

  let handlePageSelect = function (page: any) {
    setShowSidebar(false)
    router.replace(page)
    //navigate(page)
  }

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
              <Button variant="navbar" size="lg" onClick={() =>
                //navigate('/')
                router.replace("/")
              }>
                Edoardo Colella
              </Button>
            </Col>
            <Col
              xs={1}
              className="d-flex align-items-center justify-content-center"
            ></Col>
          </Row>
        </Container>
      </Navbar>
      <SideBar
        show={showSidebar}
        pageSelect={handlePageSelect}
        onHide={handleCloseClick}
      />
    </>
  )
}

function SideBar(props: {
  pageSelect: (arg0: string) => void
  show: boolean
  onHide: any
}) {

  const language = useContext(LanguageContext)

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
        <Offcanvas.Title>
          <h1>Explore</h1>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <ListGroup variant="flush">
          <ListGroup.Item action onClick={selectEmpty}>
            <SideBarElement
              icon={<FontAwesomeIcon icon={faCompass} />}
              name="About"
            />
          </ListGroup.Item>

          <ListGroup.Item action onClick={selectEducation}>
            <SideBarElement
              icon={<FontAwesomeIcon icon={faUserGraduate} />}
              name={language === 'IT' ? 'Educazione' : 'Education'}
            />
          </ListGroup.Item>
          <ListGroup.Item action onClick={selectExperiences}>
            <SideBarElement
              icon={<FontAwesomeIcon icon={faBriefcase} />}
              name={language === 'IT' ? 'Esperienze' : 'Experiences'}
            />
          </ListGroup.Item>
          <ListGroup.Item action onClick={selectProjects}>
            <SideBarElement
              icon={<FontAwesomeIcon icon={faProjectDiagram} />}
              name={language === 'IT' ? 'Progetti' : 'Projects'}
            />
          </ListGroup.Item>
          <ListGroup.Item action onClick={selectSkills}>
            <SideBarElement
              icon={<FontAwesomeIcon icon={faLightbulb} />}
              name="Skills"
            />
          </ListGroup.Item>

          <ListGroup.Item action onClick={selectContacts}>
            <SideBarElement
              icon={<FontAwesomeIcon icon={faMailBulk} />}
              name={language === 'IT' ? 'Contatti' : 'Contacts'}
            />
          </ListGroup.Item>
          <ListGroup.Item action onClick={onButtonClick}>
            <SideBarElement
              icon={<FontAwesomeIcon icon={faAddressCard} />}
              name={language === 'IT' ? 'Curriculum vitae' : 'Resume'}
            />
          </ListGroup.Item>
        </ListGroup>
      </Offcanvas.Body>
    </Offcanvas>
  )
}

function SideBarElement(props: {
  icon: string | ReactElement<any, string | JSXElementConstructor<any>>
  name: string
}) {
  return (
    <Container className="sidebar-item">
      {props.icon} {props.name}
    </Container>
  )
}
