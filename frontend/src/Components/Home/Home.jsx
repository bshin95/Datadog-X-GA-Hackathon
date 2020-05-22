import React from "react";
// import Grid from "react-css-grid";
import "./Home.css";
import Search from "../Search/Search"
class Home extends React.Component {
  render() {
    return (
<>
        <Search />
        
      <div className='gridContainer'>
        <div className='gridCard'>
            <div>
            <img src="logo_vertical_white.png" alt="Datadog logo" class="logo"></img>
          </div>
          <div>Column</div>
          <div>Column</div>
          <div>Column</div>
          <div>Column</div>
          <div>Column</div>
        </div>
      </div>
      </>
    );
  }
}

export default Home;

// <div className='Grid-Cards'>
//   <Grid width={320} gap={24}>
//     <div>Column</div>
//     <div>Column</div>
//     <div>Column</div>
//     <div>Column</div>
//     <div>Column</div>
//     <div>Column</div>
//   </Grid>
// </div>
