import { type ReactNode } from 'preact/compat'
import { Navbar, NavbarBrand } from 'trunx'

export function LessonContainer({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar color="primary">
        <NavbarBrand></NavbarBrand>
      </Navbar>

      {children}
    </>
  )
}
