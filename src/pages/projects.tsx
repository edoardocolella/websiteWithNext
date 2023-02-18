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
import { chooseWordForActualLanguage, LanguageContext } from './_app'
import { CardActionArea } from '@mui/material'

export default function ProjectsPage() {
  const language = useContext(LanguageContext)

  return (
    <Container className="text-center">
      <br />
      <h1>{chooseWordForActualLanguage(language, 'Progetti', 'Projects')}</h1>
      <Row className="d-flex justify-content-center">
        <ProjectCard
          image={liveartImage}
          title={'LiveArtVR'}
          data={ProjectsData.liveArt}
        />
        <ProjectCard title={'EZWH'} data={ProjectsData.ezwh} />
      </Row>
      <Row className="d-flex justify-content-center">
        <ProjectCard title={'HikeFIVE!'} data={ProjectsData.hikeFIVE} />
        <ProjectCard
          title={'StudyPlan'}
          data={ProjectsData.studyPlan}
          image={studyplanImage}
        />
      </Row>
    </Container>
  )
}

function ProjectCard(props: {
  title: string
  image?: StaticImageData
  data: {
    tech: string
    it: { description: string }
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
  image?: StaticImageData
  title: string
  onClose: any
  data: any
}) {
  const language = useContext(LanguageContext)

  return (
    <Modal show={props.show} onHide={props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.image && (
          <Image src={props.image} height={200} width={400} alt={'error'} />
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
                )}{' '}
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
