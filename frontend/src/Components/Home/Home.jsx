import React from "react";
import "./Home.css";
import Search from "../Search/Search";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="gridContainer">
          <div className="gridCard">
            <div className="card">
              <img
                src="companylogo.png"
                alt="company logo"
                className="hometiles"
              ></img>
              <p>PAWPRINT</p>
            </div>

            <div className="card">
              <Link to="/news">
                <img
                  src="companynews.png"
                  alt="company news"
                  className="hometiles"
                ></img>
              </Link>
              <p>NEWS</p>
            </div>

            <div className="card">
              <Link to="/newhires">
                <img
                  src="new-hires-puppies.png"
                  alt="new hires"
                  className="hometiles"
                ></img>
              </Link>
              <p>NEW HIRES</p>
            </div>

            <div className="card">
              <Link to="/humanresources">
                <img
                  src="HRNews.png"
                  alt="human resources"
                  className="hometiles"
                ></img>
              </Link>
              <p>HUMAN RESOURCES</p>
            </div>

            <div className="card">
              <Link to="/development">
                <img
                  src="tech.png"
                  alt="development"
                  className="hometiles"
                ></img>
              </Link>
              <p>DEVELOPMENT</p>
            </div>

            <div className="card">
              <Link to="/eventcalendar">
                <img
                  src="announcements.png"
                  alt="announcements"
                  className="hometiles"
                ></img>
              </Link>
              <p>EVENT CALENDAR</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
