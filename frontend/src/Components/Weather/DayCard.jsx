import React from "react"
import styled from "styled-components"

var moment = require("moment")

const Forecast = styled.div`
  display: flex;
`

const CardOne = styled.div``

const CardTwo = styled.div``

const DayCard = ({ reading }) => {
  let newDate = new Date()
  const weekday = reading.dt * 1000
  newDate.setTime(weekday)


  return (
    <Forecast>
      <CardOne>
        <h3 className="card-title">{moment(newDate).format("dddd")}</h3>
        <p className="text-muted">
        </p>
      </CardOne>
      <CardTwo>
        <h2>{Math.round(reading.main.temp)} °F</h2>
        <div className="card-body">
          <p className="card-text">{reading.weather[0].description}</p>
        </div>
      </CardTwo>
    </Forecast>
  )
}

export default DayCard
