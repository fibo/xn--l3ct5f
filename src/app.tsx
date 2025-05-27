import { Suspense, lazy, render } from 'preact/compat'
import '#/styles/main.scss'
import { LessonLoader } from '#/components/LessonLoader'
import { Route } from '#/components/Route'
import { Router } from '#/contexts/router'
import HomePage from '#/pages/Home'
import PageNotFound from '#/pages/404'

const Animals = lazy(() => import('#/pages/animals'))
const Numbers = lazy(() => import('#/pages/numbers'))

function App() {
  return (
    <Router>
      <Route path="home" component={<HomePage />} />

      <Suspense fallback={<LessonLoader />}>
        <Route path="animals" component={<Animals />} />

        <Route path="numbers" component={<Numbers />} />
      </Suspense>

      <Route path="404" component={<PageNotFound />} />
    </Router>
  )
}

render(<App />, document.getElementById('app')!)
