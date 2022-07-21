// let postsData = [
//   { lekesKount: 11, id: 1, messages: "Its my first post" },
//   { lekesKount: 12, id: 2, messages: "Its my new post" },
//   { lekesKount: 3, id: 3, messages: "Its my next post" },
//   { lekesKount: 4, id: 4, messages: "Its my thers post" },
//   { lekesKount: 1, id: 5, messages: "Its my big post" },
//   { lekesKount: 7, id: 6, messages: "Its my bang post" },
// ];
// let dialogsData = [
//   { id: 1, name: "PeT9" },
//   { id: 2, name: "San9" },
//   { id: 3, name: "Van9" },
//   { id: 4, name: "Tan9" },
//   { id: 5, name: "Gal9" },
//   { id: 6, name: "Ol9" },
// ];
// let messageData = [
//   { id: 1, message: "Hi PeT9" },
//   { id: 2, message: "Hi San9" },
//   { id: 3, message: "Hi Van9" },
//   { id: 4, message: "Hi Tan9" },
//   { id: 5, message: "Hi Gal9" },
//   { id: 6, message: "Hi Ol9" },
// ];

let state = {
  postState: {
    postsData: [
      { lekesKount: 11, id: 1, messages: "Its my first post" },
      { lekesKount: 12, id: 2, messages: "Its my new post" },
      { lekesKount: 3, id: 3, messages: "Its my next post" },
      { lekesKount: 4, id: 4, messages: "Its my thers post" },
      { lekesKount: 1, id: 5, messages: "Its my big post" },
      { lekesKount: 7, id: 6, messages: "Its my bang post" },
    ],
  },
  dialogState: {
    messageData: [
      { id: 1, message: "Hi PeT9" },
      { id: 2, message: "Hi San9" },
      { id: 3, message: "Hi Van9" },
      { id: 4, message: "Hi Tan9" },
      { id: 5, message: "Hi Gal9" },
      { id: 6, message: "Hi Ol9" },
    ],
    dialogsData: [
      {
        img: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
        id: 1,
        name: "PeT9",
      },
      {
        img: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
        id: 2,
        name: "San9",
      },
      {
        img: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
        id: 3,
        name: "Van9",
      },
      {
        img: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
        id: 4,
        name: "Tan9",
      },
      {
        img: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
        id: 5,
        name: "Gal9",
      },
      {
        img: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
        id: 6,
        name: "Ol9",
      },
    ],
    imgData: [
      {
        name: "San9",
        img: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
      },
      {
        name: "Van9",
        img: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
      },
      {
        name: "Pet9",
        img: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
      },
    ],
  },
};

export default state;
