import {
  type ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState
} from 'preact/compat'

const routeIds = [
  'home',
  '404',
  // Lessons.
  'animals',
  'numbers'
] as const
export type RouteId = (typeof routeIds)[number]
function isRouteId(arg: string): arg is RouteId {
  return (routeIds as readonly string[]).includes(arg)
}

function getRouteIdFromHash(hash: string): RouteId {
  const maybeRoute = hash.replace('#', '')
  if (maybeRoute === '') return 'home'
  if (isRouteId(maybeRoute)) return maybeRoute
  return '404'
}

function getHashFromRouteId(routeId: RouteId): string {
  if (routeId === 'home') return ''
  return routeId
}

type Context = {
  routeId: RouteId
  navigateTo: (routeId: RouteId) => void
}

export const RouterContext = createContext<Context>({} as Context)

type Props = {
  children: ReactNode
}

export function Router({ children }: Props) {
  const [routeId, setRouteId] = useState(getRouteIdFromHash(location.hash))

  const navigateTo = useCallback(
    (newRouteId: RouteId) => {
      if (routeId === newRouteId) return
      const url = new URL(window.location.href)
      url.hash = getHashFromRouteId(newRouteId)
      history.pushState({}, '', url)
      setRouteId(newRouteId)
    },
    [routeId]
  )

  useEffect(() => {
    addEventListener('popstate', () => {
      setRouteId(getRouteIdFromHash(location.hash))
    })
  }, [])

  return (
    <RouterContext.Provider value={{ routeId, navigateTo }}>
      {children}
    </RouterContext.Provider>
  )
}
