import { Hero, HeroBody, Title } from 'trunx'
import { Link } from '#/components/Link'

export default function HomePage() {
  return (
    <>
      <Hero color="primary">
        <HeroBody>
          <Title>Speak Thai</Title>
        </HeroBody>
      </Hero>

      <ul>
        <li>
          <Link to="animals">Animals</Link>
        </li>
        <li>
          <Link to="numbers">Numbers</Link>
        </li>
      </ul>
    </>
  )
}
