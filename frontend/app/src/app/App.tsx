import type { FC } from "react"
import AppRouterProvider from "./providers/AppRouterProvider"

const App: FC<{}> = () => {
  return (
    <AppRouterProvider/>
  )
}

export default App
