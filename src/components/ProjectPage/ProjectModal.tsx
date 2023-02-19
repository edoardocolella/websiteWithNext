import React, { useContext } from 'react'
import { Modal, Row, Col } from 'react-bootstrap'
import { chooseWordForActualLanguage, LanguageContext } from '../../pages/_app'
import { CardMedia } from '@mui/material'

export function ProjectModal(props: {
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
  