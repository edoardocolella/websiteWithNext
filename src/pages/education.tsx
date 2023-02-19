import { Row } from 'react-bootstrap'
import { useContext } from 'react'
import SchoolData from '../data/educationData.json'
import { LanguageContext, chooseWordForActualLanguage } from './_app'
import { SchoolCard } from '@/components/SchoolPage/SchoolCard'

export default function EducationPage() {
  const language = useContext(LanguageContext)
  return (
    <>
      <br />
      <h1>
        {chooseWordForActualLanguage(language, 'Educazione', 'Education')}
      </h1>
      <Row className="d-flex justify-content-center">
        {SchoolData.map((school) => <SchoolCard key={school.key} data={school} />)}
      </Row>
    </>
  )
}

