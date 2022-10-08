import React from "react";
import { useState } from "react";
import "./news.css";

const News = (props) => {
  // let sliceIntoChunks = (arr, chunkSize) => {
  //   const res = [];
  //   for (let i = 0; i < arr.length; i += chunkSize) {
  //     const chunk = arr.slice(i, i + chunkSize);
  //     res.push(chunk);
  //   }
  //   return res;
  // };

  // sliceIntoChunks(props.news, 10);

  // let pageChange = () => {
  //   return pagesCount.length + 1;
  // };

  return (
    <div className="App">
      <button onClick={props.handleShowMore}>Next</button>
      {props.news
        .slice(0, props.showItems)
        .map(({ author, title, url, urlToImage, content }, i) => (
          <div key={i}>
            <div>
              <h1>{title}</h1>
            </div>
            <div>{author}</div>
            <div className="item">
              <p>
                <img src={urlToImage} alt="" />
              </p>
            </div>
            <div>{content}</div>
            <div>
              <form action={url}>
                {" "}
                <button type="submit">Подробнее</button>{" "}
              </form>
            </div>
          </div>
        ))}
      <button onClick={props.handleShowMore}>Next</button>
    </div>
  );
};

export default News;
