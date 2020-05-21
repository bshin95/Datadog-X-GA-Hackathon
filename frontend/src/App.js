import React, { useEffect } from "react"
import "./App.css"
import Container from "./components/Container"
import Chat from "./components/Chat/ChatContainer"
import ChatContainer from "./components/Chat/ChatContainer"

// Redux
import store from "./store"
import { loadUser } from "./actions/auth"
import setAuthToken from "./utils/setAuthToken"

const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token)
    store.dispatch(loadUser())
  }, [])

  return (
    <div>
      <Container />
      <ChatContainer />
    </div>
  )
}

export default App
