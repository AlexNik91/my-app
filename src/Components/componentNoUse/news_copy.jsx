import React from "react";
import { useState } from "react";
import "./news.css";

class News extends React.Component {
  constructor(props) {
    super(props);

    this.handleShowMore = this.handleShowMore.bind(this);

    this.state = {
      items: [this.props.news],
      showItems: 2,
    };
  }

  handleShowMore() {
    this.setState({
      showItems:
        this.state.showItems >= this.state.items.length
          ? this.state.showItems
          : this.state.showItems + 1,
    });
  }

  render() {
    const items = this.state.items
      .slice(0, this.state.showItems)
      .map((item) => <div>{item}</div>);

    return (
      <div>
        {items}
        <button onClick={this.handleShowMore}>Show more!</button>
      </div>
    );
  }
}

export default News;
