import ProjectsData from '../data/projectsData.json'
import { Row } from 'react-bootstrap'
import { useContext } from 'react'
import { chooseWordForActualLanguage, LanguageContext } from './_app'
import { ProjectCard } from '@/components/ProjectPage/ProjectCard'

export default function ProjectsPage() {
  const language = useContext(LanguageContext)

  return (
    <>
      <br />
      <h1>{chooseWordForActualLanguage(language, 'Progetti', 'Projects')}</h1>
      <Row className="d-flex justify-content-center">
        {ProjectsData.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </Row>
    </>
  )
}
