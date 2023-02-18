import { useRouter } from 'next/router'
import { useContext } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { chooseWordForActualLanguage, LanguageContext } from './_app'

export default function NonExistentPage() {
  const language = useContext(LanguageContext)
  const router = useRouter()

  return (
    <>
      <br />
      <Row>
        <Col>
          {chooseWordForActualLanguage(
            language,
            'Questa pagina non esiste.',
            'This page does not exist.',
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          {chooseWordForActualLanguage(
            language,
            'Torna alla Homepage.',
            'Go back to the Homepage.',
          )}
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Button
            variant="outline-primary"
            size="lg"
            onClick={() => router.replace('/')}
          >
            Homepage
          </Button>
        </Col>
      </Row>
    </>
  )
}
