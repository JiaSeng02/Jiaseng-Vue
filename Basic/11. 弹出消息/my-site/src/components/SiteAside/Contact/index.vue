<template>
  <ul class="contact-container">
    <li>
      <a href="">
        <div class="icon">
          <Icon type="github" />
        </div>
        <span>JiaSeng02</span>
      </a>
    </li>
    <li>
      <a href="mailto:jiaseng02@gmail.com">
        <div class="icon">
          <Icon type="mail" />
        </div>
        <span>jiaseng02@gmail.com</span>
      </a>
    </li>
    <li>
      <a
        href=""
      >
        <div class="icon">
          <Icon type="qq" />
        </div>
        <span>Jiaseng_qq</span>
      </a>
      <div class="pop">
        <img
          src="https://qzonestyle.gtimg.cn/aoi/sola/20190611144048_Bsd9ikI0uS.png"
          alt=""
        />
      </div>
    </li>
    <li>
      <a>
        <div class="icon weixin">
          <Icon type="weixin" />
        </div>
        <span>Seng</span>
      </a>
      <div class="pop">
        <img
          src="https://qzonestyle.gtimg.cn/aoi/sola/20190611144048_Bsd9ikI0uS.png"
          alt=""
        />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.contact-container {
  list-style: none;
  padding: 20px;
  margin: 0;
  color: @gray;
  @itemHeight: 30px;
  li {
    height: @itemHeight;
    line-height: 30px;
    margin: 14px 0;
    position: relative;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
  }
  a {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  .icon {
    font-size: 26px;
    width: 36px;
    &.weixin {
      font-size: 32px;
      text-indent: -3px;
    }
  }
  .pop {
    position: absolute;
    left: 0;
    bottom: @itemHeight + 5px;
    padding: 10px 15px;
    background: #fff;
    border-radius: 5px;
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: 0.3s;
    img {
      width: 150px;
      height: 150px;
    }
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      width: 8px;
      height: 8px;
      background: #fff;
      bottom: -4px;
    }
  }
}
</style>
