import ProjectsData from '../data/projectsData.json'
import { Card, Col, Modal, Row } from 'react-bootstrap'
import { useContext, useState } from 'react'
import { chooseWordForActualLanguage, LanguageContext } from './_app'
import { CardActionArea, CardMedia } from '@mui/material'

export default function ProjectsPage() {
  const language = useContext(LanguageContext)

  return (
    <>
      <br />
      <h1>{chooseWordForActualLanguage(language, 'Progetti', 'Projects')}</h1>
      <Row className="d-flex justify-content-center">
        <ProjectCard project={ProjectsData.liveArt} />
        <ProjectCard project={ProjectsData.ezwh} />
      </Row>
      <Row className="d-flex justify-content-center">
        <ProjectCard project={ProjectsData.hikeFIVE} />
        <ProjectCard project={ProjectsData.studyPlan} />
      </Row>
      <Row className="d-flex justify-content-center">
        <ProjectCard project={ProjectsData.personalWebsite} />
      </Row>
    </>
  )
}

function ProjectCard(props: {
  project: {
    title: string
    image?: string
    linkDemo?: string
    linkRepo?: string
    tech: string
    it: {
      description: string
      linkDemoDescription?: string
      linkRepoDescription?: string
    }
    en: {
      description: string
      linkRepoDescription?: string
      linkDemoDescription?: string
    }
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
        show={showProjectModal}
        onClose={handleCloseProjectModal}
        project={props.project}
      />
      <Col md={5} xl={5}>
        <Card className="mb-3 mt-4">
          <CardActionArea onClick={handleShowProjectModal}>
            <Card.Body>
              <Card.Title>
                <Row className="top-row">
                  <Col>{props.project.title}</Col>
                </Row>
              </Card.Title>
              <Row>
                <Col>{props.project.tech}</Col>
              </Row>
            </Card.Body>
          </CardActionArea>
        </Card>
      </Col>
    </>
  )
}

function ProjectModal(props: {
  show: boolean
  onClose: any
  project: {
    title: string
    image?: string
    linkDemo?: string
    linkRepo?: string

    it: {
      description: string
      linkDemoDescription?: string
      linkRepoDescription?: string
    }
    en: {
      description: string
      linkRepoDescription?: string
      linkDemoDescription?: string
    }
  }
}) {
  const language = useContext(LanguageContext)

  return (
    <Modal show={props.show} onHide={props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.project.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.project.image && (
          <CardMedia
            component="img"
            style={{ maxWidth: '100%', height: 'auto' }}
            image={props.project.image}
            alt={props.project.title}
          />
        )}
        <Row className="justify">
          <Col>
            <br />
            {chooseWordForActualLanguage(
              language,
              props.project.it.description,
              props.project.en.description,
            )}
          </Col>
        </Row>
        {props.project.linkDemo && (
          <Row>
            <Col>
              <a href={props.project.linkDemo} target="_blank" rel="noreferrer">
                {chooseWordForActualLanguage(
                  language,
                  props.project.it.linkDemoDescription,
                  props.project.en.linkDemoDescription,
                )}
              </a>
            </Col>
          </Row>
        )}
        {props.project.linkRepo && (
          <Row>
            <Col>
              <a href={props.project.linkRepo} target="_blank" rel="noreferrer">
                {chooseWordForActualLanguage(
                  language,
                  props.project.it.linkRepoDescription,
                  props.project.en.linkRepoDescription,
                )}
              </a>
            </Col>
          </Row>
        )}
      </Modal.Body>
    </Modal>
  )
}
