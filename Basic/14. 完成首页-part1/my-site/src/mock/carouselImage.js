import Mock from "mockjs";

Mock.mock("/api/carouselImage", "get", {
  code: 0,
  msg: "",
  data: [
    {
      id: "1",
      img: "http://mdrs.yuanjin.tech/img/20201206153157.png",
    },
    {
      id: "2",
      img: "http://mdrs.yuanjin.tech/img/20201206153157.png",
    },
    {
      id: "3",
      img: "http://mdrs.yuanjin.tech/img/20201206153157.png",
    },
    {
      id: "4",
      img: "http://mdrs.yuanjin.tech/img/20201206153157.png",
    },
  ],
});
