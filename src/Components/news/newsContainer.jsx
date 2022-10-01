import React from "react";
import { connect } from "react-redux";
import { getNewsThunkCreator } from "../../redux/reducers/newsReducer";
import { compose } from "redux";
import News from "./news";

class NewsContainer extends React.Component {
  componentDidMount() {
    this.props.getNewsThunkCreator();
  }
  render() {
    return <News news={this.props.news} />;
  }
}

let mapStateToProps = (state) => {
  return {
    news: state.newsState.news,
  };
};

export default compose(connect(mapStateToProps, { getNewsThunkCreator }))(
  NewsContainer
);
