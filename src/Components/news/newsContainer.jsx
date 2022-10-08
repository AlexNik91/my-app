import React from "react";
import { connect } from "react-redux";
import {
  getNewsThunkCreator,
  handleShowMore,
} from "../../redux/reducers/newsReducer";
import { compose } from "redux";
import News from "./news";

class NewsContainer extends React.Component {
  componentDidMount() {
    this.props.getNewsThunkCreator();
  }
  render() {
    return (
      <News
        showItems={this.props.showItems}
        news={this.props.news}
        handleShowMore={this.props.handleShowMore}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    news: state.newsState.news,
    showItems: state.newsState.showItems,
  };
};

export default compose(
  connect(mapStateToProps, { getNewsThunkCreator, handleShowMore })
)(NewsContainer);
