import Head from 'next/head'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import { useRouter } from 'next/router'
import { Row, Col } from 'react-bootstrap'
import Data from '../data/homepageData.json'
import { LanguageContext, chooseWordForActualLanguage } from './_app'
import { useContext } from 'react'

export default function Home() {
  const language = useContext(LanguageContext)

  const myData = language === 'IT' ? Data.it : Data.en

  return (
    <>
      <Head>
        <title>Edoardo Colella</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <br />
        <Row className="justify-content-center">
          <h1 className="center">About me</h1>
          <Col className="justify-content-center" md={10} xl={8}>
            <p>{myData.homePageP1}</p>
            <p>{myData.homePageP2}</p>
            <p>{myData.homePageP3}</p>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col md={10} xl={4}>
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
          <Col md={10} xl={4}>
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
        </Row>
        <Row className="d-flex justify-content-center">
          <Col md={10} xl={4}>
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
          <Col md={10} xl={4}>
            <NavCard
              title="Skills"
              image="https://jvngarcia.com/wp-content/uploads/2021/07/frameworks-mas-famosos-del-mundo.jpg"
              page="skills"
            />
          </Col>
        </Row>
      </main>
    </>
  )
}

function NavCard(props: { page: any; image: string; title: string }) {
  const router = useRouter()

  let navigateSlash = function () {
    router.replace(`/${props.page}`)
  }
  return (
    <Card className="mb-3 mt-4">
      <CardActionArea onClick={navigateSlash}>
        <CardMedia component="img" height="240" image={props.image} />
        <CardContent>
          <Typography gutterBottom align="center" variant="h4" component="div">
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
