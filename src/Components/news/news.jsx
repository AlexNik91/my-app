import React from "react";
import "./news.css";

const News = (props) => {
  return (
    <div className="App">
      {props.news.map(({ author, title, urlToImage, content }, i) => (
        <div key={i}>
          <div>
            <h1>{title}</h1>
          </div>
          <div>{author}</div>
          <div className="item">
            <img src={urlToImage} alt="" />
          </div>
          <div>{content}</div>
        </div>
      ))}
    </div>
  );
};

export default News;
