import React from "react"
import DayCard from "./DayCard"
// import apiConfig from "./apiKeys"

class WeekContainer extends React.Component {
  state = {
    fullData: [],
    dailyData: [],
  }

  componentDidMount = () => {
    const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=80bb87f8fbac9706c1f23b9ee85046c9`

    fetch(weatherURL)
      .then((res) => res.json())
      .then((data) => {
        const dailyData = data.list.filter((reading) =>
          reading.dt_txt.includes("18:00:00")
        )
        this.setState(
          {
            fullData: data.list,
            dailyData: dailyData,
          },
          () => console.log(this.state)
        )
      })
  }

  formatDayCards = () => {
    return this.state.dailyData.map((reading, index) => (
      <DayCard reading={reading} key={index} />
    ))
  }

  render() {
    // return <div>{this.formatDayCards()}</div>
    // const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=80bb87f8fbac9706c1f23b9ee85046c9`

    return (
      <div>
        <h1>Weather Info</h1>
      </div>
    )
  }
}

export default WeekContainer
