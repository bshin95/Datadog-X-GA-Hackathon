import React from "react";
// import Grid from "react-css-grid";
import "../Cards/Cards.css";

class Cards extends React.Component {
  render() {
    return (
      <div className='gridContainer'>
        <div className='gridCard'>
          <div>Column</div>
          <div>Column</div>
          <div>Column</div>
          <div>Column</div>
          <div>Column</div>
          <div>Column</div>
        </div>
      </div>
    );
  }
}

export default Cards;

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
