import React from "./node_modules/react";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      users: []
    };
  }
  render() {
    return <div className="searchContainer"></div>;
  }
}

export default Search;
