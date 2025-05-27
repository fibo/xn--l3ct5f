import { useContext } from 'preact/compat'
import { RouterContext } from '#/contexts/router'

export function useRouter() {
  return useContext(RouterContext)
}
