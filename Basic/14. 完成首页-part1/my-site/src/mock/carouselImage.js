import Mock from "mockjs";

Mock.mock("/api/carouselImage", "get", {
  code: 0,
  msg: "",
  data: [
    {
      id: "1",
      img: "https://pngimg.com/uploads/mario/small/mario_PNG109.png",
    },
    {
      id: "2",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0MHzzuYV6tQFjMV1NpVVOEO3_EVdOjJ5F7w&s",
    },
    {
      id: "3",
      img: "https://pngimg.com/uploads/mario/small/mario_PNG44.png",
    },
    {
      id: "4",
      img: "https://pngimg.com/uploads/mario/small/mario_PNG119.png",
    },
  ],
});
