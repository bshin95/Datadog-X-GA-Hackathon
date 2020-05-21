import React from "react"
import "./App.css"

// import WeekContainer from "./components/Weather/WeekContainer"
import Container from "./components/Container";

function App() {
  return (
    <div className='App'>
      {/* <WeekContainer /> */}
      <Container />
    </div>
  )
}

export default App

// FOR  NOW I JUST COMMENTED THIS OUT
// BECAUSE ITS GIVING ERROS : Cannot find file: 'WeekContainer.jsx' does not match the corresponding name on disk: './src/components/Weather/Components'.
