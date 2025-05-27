import { Link } from '#/components/Link'

export default function PageNotFound() {
  return (
    <>
      <h1>Page not found</h1>

      <p>
        Go to <Link to="home">Home page</Link>
      </p>
    </>
  )
}
