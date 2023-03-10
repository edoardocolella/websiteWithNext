import { useContext } from 'react'
import { Col, Container, ListGroup, Row } from 'react-bootstrap'
import { chooseWordForActualLanguage, LanguageContext } from './_app'
import Data from '../data/skillsData.json'

export default function SkillsPage() {
  const language = useContext(LanguageContext)

  return (
    <>
      <br />
      <Row className="justify-content-center">
        <h1 className="center">Skills</h1>
        <Col className=" justify-content-center"  md={8} xl={8}>
          <p />
          <ListGroup>
            {language === 'IT'
              ? Data.it.map((el) => (
                <ListGroup.Item className="center p-2" key={el}>{el}</ListGroup.Item>
                ))
              : Data.en.map((el) => (
                  <ListGroup.Item className="center p-2" key={el}>{el}</ListGroup.Item>
                ))}
          </ListGroup>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col className="justify" md={8} xl={8}>
          <p />
          <h2 className="center">
            {chooseWordForActualLanguage(
              language,
              'Linguaggi di programmazione conosciuti',
              'Known programming languages',
            )}
          </h2>
          <p />
          <Row>
            <Col>
              <ListGroup>
                {Data.languagesPt1.map((el) => (
                  <ListGroup.Item  key={el}>{"- " + el}</ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
            <Col>
              <ListGroup>
              {Data.languagesPt2.map((el) => (
                  <ListGroup.Item  key={el}>{"- " + el}</ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}
