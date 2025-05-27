import { LessonContainer } from '#/components/LessonContainer'
import { Link } from '#/components/Link'

export default function Page() {
  return (
    <LessonContainer>
      <h1>Animals</h1>

      <ul>
        <li>
          <Link to="home">Home</Link>
        </li>
      </ul>
    </LessonContainer>
  )
}
