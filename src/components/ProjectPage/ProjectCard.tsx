import { useContext, useState } from "react"
import { Card, Col, Row } from "react-bootstrap"
import { LanguageContext } from "../../pages/_app"
import { ProjectModal } from "./ProjectModal"
import { CardActionArea } from "@mui/material"


export function ProjectCard(props: {
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