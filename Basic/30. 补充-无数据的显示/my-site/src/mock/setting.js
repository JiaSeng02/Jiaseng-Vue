import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar:
      "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg",
    siteTitle: "Jiaseng",
    github: "https://github.com/JiaSeng02",
    qq: "Jiaseng_qq",
    qqQrCode:
      "https://qzonestyle.gtimg.cn/aoi/sola/20190611144048_Bsd9ikI0uS.png",
    weixin: "Seng",
    weixinQrCode:
      "https://qzonestyle.gtimg.cn/aoi/sola/20190611144048_Bsd9ikI0uS.png",
    mail: "jiaseng02@gmail.com",
    icp: "第一次vue",
    githubName: "JiaSeng02",
    favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
  },
});
