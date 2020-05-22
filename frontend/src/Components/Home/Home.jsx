import React from "react";
// import Grid from "react-css-grid";
import "./Home.css";
import Search from "../Search/Search";
import { Link } from "react-router-dom";
// import { StoriesContainer } from "../News/StoriesContainer";

class Home extends React.Component {
  render() {
    return (
      <>
        <Search />

        {/* <StoriesContainer /> */}

        <div className="gridContainer">
          <div className="gridCard">
            <div>
              <img
                src="companylogo.png"
                alt="company logo"
                className="hometiles"
              ></img>
              <p>PawPrint</p>
            </div>
            <Link to="/news">
              <div>news</div>
            </Link>
            <div>2</div>
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
