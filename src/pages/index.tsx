
import { Row, Col } from 'react-bootstrap'
import Data from '../data/homepageData.json'
import { LanguageContext, chooseWordForActualLanguage } from './_app'
import { useContext } from 'react'
import { NavCard } from '@/components/HomePage/NavCard'


export default function Home() {
  const language = useContext(LanguageContext)

  const myData = language === 'IT' ? Data.it : Data.en

  return (
    <>
      
        <br />
        <Row className="justify-content-center">
          <h1 >About me</h1>
          <Col className="justify-content-center" md={10} xl={10}>
            <p>{myData.homePageP1}</p>
            <p>{myData.homePageP2}</p>
            <p>{myData.homePageP3}</p>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col md={10} xl={5}>
            <NavCard
              title={chooseWordForActualLanguage(
                language,
                'Educazione',
                'Education',
              )}
              image="https://www.unionearchitetti.com/wp-content/uploads/2022/06/polito-architettura-politecnico-750x450.png"
              page="education"
            />
          </Col>
          <Col md={10} xl={5}>
            <NavCard
              title={chooseWordForActualLanguage(
                language,
                'Esperienze',
                'Experiences',
              )}
              image="https://www.dealogando.com/wp-content/uploads/2021/10/team-working-come-lavorare-in-team.jpeg"
              page="experiences"
            />
          </Col>
        
          <Col md={10} xl={5}>
            <NavCard
              title={chooseWordForActualLanguage(
                language,
                'Progetti',
                'Projects',
              )}
              image="https://assets.entrepreneur.com/content/3x2/2000/20150708172005-coding-working-workspace-apple-macintosh.jpeg"
              page="projects"
            />
          </Col>
          <Col md={10} xl={5}>
            <NavCard
              title="Skills"
              image="https://jvngarcia.com/wp-content/uploads/2021/07/frameworks-mas-famosos-del-mundo.jpg"
              page="skills"
            />
          </Col>
        </Row>
    </>
  )
}


