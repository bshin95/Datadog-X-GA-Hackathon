import React, { useEffect } from "react"
import "./App.css"
import Container from "./components/Container"

// Redux
import store from "./store"
import { loadUser } from "./actions/auth"
import setAuthToken from "./utils/setAuthToken"

import { ThemeProvider } from "styled-components"

const theme = {
  mobile: "375px",
  tablet: "768px",
}

const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token)
    store.dispatch(loadUser())
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Container />
      </div>
    </ThemeProvider>
  )
}

export default App
