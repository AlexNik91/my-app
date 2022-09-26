import profileReducer, {
  addPost,
  delitePost,
} from "./../redux/reducers/ProfileReducer";
import React from "react";

let state = {
  postsData: [
    { lekesKount: 11, id: 1, messages: "Its my first post" },
    { lekesKount: 12, id: 2, messages: "Its my new post" },
    { lekesKount: 3, id: 3, messages: "Its my next post" },
    { lekesKount: 4, id: 4, messages: "Its my thers post" },
    { lekesKount: 1, id: 5, messages: "Its my big post" },
    { lekesKount: 7, id: 6, messages: "Its my bang post" },
  ],
};

it("Post add", () => {
  let action = addPost("testiruem post");

  let newState = profileReducer(state, action);

  expect(newState.postsData.length).toBe(7);
});

it("post info add", () => {
  let action = addPost("testiruem message");

  let newState = profileReducer(state, action);

  expect(newState.postsData[6].messages).toBe("testiruem message");
});

it("post delite", () => {
  let action = delitePost(1);

  let newState = profileReducer(state, action);

  expect(newState.postsData.length).toBe(5);
});

//  expect toBe jest (info)
