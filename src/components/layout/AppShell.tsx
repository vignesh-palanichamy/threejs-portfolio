import { type ReactNode } from 'react'
import { MainNav } from '../navigation/MainNav'

type Props = { children: ReactNode }

export function AppShell({ children }: Props) {
  return (
    <>
      <MainNav />
      <main>{children}</main>
    </>
  )
}
