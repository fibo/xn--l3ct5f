import { useCallback, type PropsWithChildren } from 'preact/compat'
import { type RouteId } from '#/contexts/router'
import { useRouter } from '#/hooks/useRouter'

type Props = {
  to: RouteId
}

export function Link({ to: routeId, children }: PropsWithChildren<Props>) {
  const { navigateTo } = useRouter()

  const onClick = useCallback(
    (event: MouseEvent) => {
      event.preventDefault()
      navigateTo(routeId)
    },
    [navigateTo, routeId]
  )

  return <a onClick={onClick}>{children}</a>
}
