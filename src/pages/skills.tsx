import { useContext } from 'react'
import { Col, Container, ListGroup, Row } from 'react-bootstrap'
import { LanguageContext } from './_app'
import Data from '../data/skillsData.json'

export default function SkillsPage() {

  const language = useContext(LanguageContext)


  return (
    <Container>
      <br />
      <Row className="me-3 justify-content-center">
        <h1 className="center">Skills</h1>
        <Col className="justify" md={7} xl={7}>
          <p />
          <ListGroup>
            {language === 'IT'
              ? Data.it.map((el) => <ListGroup.Item key={el}>{el}</ListGroup.Item>)
              : Data.en.map((el) => <ListGroup.Item key={el}>{el}</ListGroup.Item>)}
          </ListGroup>
        </Col>
      </Row>

      <Row className="me-3 justify-content-center">
        <Col className="justify" md={7} xl={7}>
          <p />
          <h2 className="center">
            {language==="IT"?"Linguaggi di programmazione conosciuti":"Known programming languages"}
          </h2>
          <p />
          <Row>
            <Col>
              <ListGroup>
                <ListGroup.Item>- C</ListGroup.Item>
                <ListGroup.Item>- C#</ListGroup.Item>
                <ListGroup.Item>- C++</ListGroup.Item>
                <ListGroup.Item>- Java</ListGroup.Item>
                <ListGroup.Item>- JavaScript</ListGroup.Item>
                <ListGroup.Item>- TypeScript</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <ListGroup>
                <ListGroup.Item>- Rust</ListGroup.Item>
                <ListGroup.Item>- Solidity</ListGroup.Item>
                <ListGroup.Item>- Python</ListGroup.Item>
                <ListGroup.Item>- MIPS</ListGroup.Item>
                <ListGroup.Item>- 8086</ListGroup.Item>
                <ListGroup.Item>- ARM</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
