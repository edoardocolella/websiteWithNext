import { Card, Col, Modal, Row } from 'react-bootstrap'
import { useContext, useState } from 'react'
import ProjectsData from '../data/projectsData.json'
import Image, { StaticImageData } from 'next/image'
import { chooseWordForActualLanguage, LanguageContext } from './_app'
import { CardActionArea, CardMedia } from '@mui/material'

export default function ProjectsPage() {
  const language = useContext(LanguageContext)

  return (
    <>
      <br />
      <h1>{chooseWordForActualLanguage(language, 'Progetti', 'Projects')}</h1>
      <Row className="d-flex justify-content-center">
        <ProjectCard title={'LiveArtVR'} data={ProjectsData.liveArt} />
        <ProjectCard title={'EZWH'} data={ProjectsData.ezwh} />
      </Row>
      <Row className="d-flex justify-content-center">
        <ProjectCard title={'HikeFIVE!'} data={ProjectsData.hikeFIVE} />
        <ProjectCard title={'StudyPlan'} data={ProjectsData.studyPlan} />
      </Row>
    </>
  )
}

function ProjectCard(props: {
  title: string
  data: {
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
        title={props.title}
        data={props.data}
      />
      <Col md={5} xl={5}>
        <Card className="mb-3 mt-4">
          <CardActionArea onClick={handleShowProjectModal}>
            <Card.Body>
              <Card.Title>
                <Row className="top-row">
                  <Col>{props.title}</Col>
                </Row>
              </Card.Title>
              <Row>
                <Col>
                  <strong>
                    {chooseWordForActualLanguage(
                      language,
                      'Tecnologie: ',
                      'Technology: ',
                    )}
                  </strong>
                  {props.data.tech}
                </Col>
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
  title: string
  onClose: any
  data: {
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
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.data.image && (
          <CardMedia
            component="img"
            style={{ maxWidth: '100%', height: 'auto' }}
            image={props.data.image}
          />
        )}
        <Row className="justify">
          <Col>
            <br />
            {chooseWordForActualLanguage(
              language,
              props.data.it.description,
              props.data.en.description,
            )}
          </Col>
        </Row>
        {props.data.linkDemo && (
          <Row>
            <Col>
              <a href={props.data.linkDemo} target="_blank" rel="noreferrer">
                {chooseWordForActualLanguage(
                  language,
                  props.data.it.linkDemoDescription,
                  props.data.en.linkDemoDescription,
                )}{' '}
              </a>
            </Col>
          </Row>
        )}
        {props.data.linkRepo && (
          <Row>
            <Col>
              <a href={props.data.linkRepo} target="_blank" rel="noreferrer">
                {chooseWordForActualLanguage(
                  language,
                  props.data.it.linkRepoDescription,
                  props.data.en.linkRepoDescription,
                )}
              </a>
            </Col>
          </Row>
        )}
      </Modal.Body>
    </Modal>
  )
}
