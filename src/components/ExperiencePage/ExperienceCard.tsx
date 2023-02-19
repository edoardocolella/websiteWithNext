import React, { useContext, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { chooseWordForActualLanguage, LanguageContext } from '../../pages/_app'
import { ExperienceModal } from './ExperienceModal'
import { CardActionArea } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

export function ExperienceCard(props: {
  experience: {
    it: {
      title: string
      description: string
    }
    en: {
      title: string
      description: string
    }
    startDate: string
    endDate?: string
  }
}) {
  const language = useContext(LanguageContext)
  const [showExperienceModal, setShowExperienceModal] = useState(false)

  const handleCloseExperienceModal = () => {
    setShowExperienceModal(false)
  }

  const handleShowExperienceModal = () => {
    setShowExperienceModal(true)
  }

  return (
    <>
      <ExperienceModal
        show={showExperienceModal}
        onClose={handleCloseExperienceModal}
        experience={props.experience}
      />
      <Col md={5} xl={5}>
        <Card className="mb-3 mt-4">
          <CardActionArea onClick={handleShowExperienceModal}>
            <Card.Body>
              <Card.Title>
                <Row className="top-row">
                  <Col>
                    {chooseWordForActualLanguage(
                      language,
                      props.experience.it.title,
                      props.experience.en.title,
                    )}
                  </Col>
                </Row>
              </Card.Title>
              <Row>
                <Col>
                  <FontAwesomeIcon icon={faCalendar} />
                  {' ' +
                    props.experience.startDate +
                    ' - ' +
                    (props.experience.endDate
                      ? props.experience.endDate
                      : chooseWordForActualLanguage(
                          language,
                          'In corso',
                          'In progress',
                        ))}
                </Col>
              </Row>
            </Card.Body>
          </CardActionArea>
        </Card>
      </Col>
    </>
  )
}
