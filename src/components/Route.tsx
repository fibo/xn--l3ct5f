import { type ReactNode } from 'preact/compat'
import { type RouteId, RouterContext } from '#/contexts/router'

type Props = {
  path: RouteId
  component: ReactNode
}

export function Route({ path, component }: Props) {
  return (
    <RouterContext.Consumer>
      {({ routeId }) => (routeId === path ? <>{component}</> : null)}
    </RouterContext.Consumer>
  )
}
