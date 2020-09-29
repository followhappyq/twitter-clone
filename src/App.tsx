import React from "react"
import { ThemeProvider } from "@material-ui/core"

import SignIn from "./pages/SignIn"
import theme from "./theme"

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <SignIn />
      </ThemeProvider>
    </div>
  )
}

export default App
