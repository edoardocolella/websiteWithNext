import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUpRightAndDownLeftFromCenter,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from 'react'
import ProjectsData from '../data/projectsData.json'
import liveartImage from '../../public/images/liveart.jpg'
import studyplanImage from '../../public/images/studyplan.jpg'
import Image, { StaticImageData } from 'next/image'
import { LanguageContext } from './_app'

export default function ProjectsPage() {
  const language = useContext(LanguageContext)

  return (
    <Container className="text-center">
      <br />
      <h1>{language === 'IT' ? 'Progetti' : 'Projects'}</h1>
      <br />
      <ProjectCard
        image={liveartImage}
        title={'LiveArtVR'}
        data={ProjectsData.liveArt}
      />
      <br />
      <ProjectCard title={'EZWH'} data={ProjectsData.ezwh} />
      <br />
      <ProjectCard title={'HikeFIVE!'} data={ProjectsData.hikeFIVE} />
      <br />
      <ProjectCard
        title={'StudyPlan'}
        data={ProjectsData.studyPlan}
        image={studyplanImage}
      />
    </Container>
  )
}

function ProjectCard(props: {
  title: string
  image?: StaticImageData
  data: {
    tech: string
    ita: { description: string }
    en: { description: string }
  }
}) {
  const [showProjectModal, setShowProjectModal] = useState(false)

  const handleCloseProjectModal = () => {
    setShowProjectModal(false)
  }

  const handleShowProjectModal = () => {
    setShowProjectModal(true)
  }

  const language = useContext(LanguageContext)

  return (
    <>
      <ProjectModal
        image={props.image}
        show={showProjectModal}
        onClose={handleCloseProjectModal}
        title={props.title}
        data={props.data}
      />
      <Row className="justify-content-md-center">
        <Col md={10}>
          <Card>
            <Card.Body>
              <Card.Title>
                <Row className="top-row">
                  <Col>{props.title}</Col>

                  <Col className="text-end">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={handleShowProjectModal}
                    >
                      <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
                    </Button>
                  </Col>
                </Row>
              </Card.Title>
              <Row>
                <Col className="text-start">
                  <strong>
                    {language === 'IT' ? 'Tecnologie: ' : 'Technology: '}
                  </strong>
                  {props.data.tech}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}

function ProjectModal(props: {
  show: boolean
  image?: StaticImageData
  title: string
  onClose: any
  data: {
    ita: {
      description: string
      linkDemoDescription?: string
      linkRepoDescription?: string
    }
    en: {
      description: string
      linkDemoDescription?: string
      linkRepoDescription?: string
    }
    linkDemo?: string
    linkRepo?: string
  }
}) {

const language = useContext(LanguageContext)

  return (
    <Modal show={props.show} onHide={props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.image && (
          
        <Image src={props.image} height={200} width={400} alt={"error"} />
          
        )}
        <Row className="justify">
          <Col>
            <br />
            {language === 'IT'
              ? props.data.ita.description
              : props.data.en.description}
          </Col>
        </Row>
        {props.data.linkDemo && (
          <Row>
            <Col>
              <a href={props.data.linkDemo} target="_blank" rel="noreferrer">
                {language === 'IT'
                  ? props.data.ita.linkDemoDescription
                  : props.data.en.linkDemoDescription}{' '}
              </a>
            </Col>
          </Row>
        )}
        {props.data.linkRepo && (
          <Row>
            <Col>
              <a href={props.data.linkRepo} target="_blank" rel="noreferrer">
                {language === 'IT'
                  ? props.data.ita.linkRepoDescription
                  : props.data.en.linkRepoDescription}{' '}
              </a>
            </Col>
          </Row>
        )}
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
