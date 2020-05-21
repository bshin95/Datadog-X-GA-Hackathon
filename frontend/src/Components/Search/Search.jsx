import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      results: {},
      loading: false,
      message: "",
    };
  }
  render() {
    return <div className="searchContainer"></div>;
  }
}

export default Search;
