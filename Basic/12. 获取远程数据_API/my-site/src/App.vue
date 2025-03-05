<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <template #default>
        <div class="banner-container">
          <div v-for="banner in banners" :key="banner.id" class="banner">
            <img :src="banner.midImg" alt="Banner Image" />
            <h3>{{ banner.title }}</h3>
            <p>{{ banner.description }}</p>
          </div>
        </div>
        <div id="message-container"></div>
        <!-- 添加消息容器 -->
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./components/Layout";
import SiteAside from "./components/SiteAside";
import { getBanners } from "./api/banner"; // 引入 getBanners 函数
import showMessage from "./utils/showMessage";

export default {
  components: {
    Layout,
    SiteAside,
  },
  data() {
    return {
      banners: [], // 用于存储获取到的横幅数据
      loading: "false",
    };
  },
  async created() {
    await this.fetchBanners(); // 在组件创建时调用 fetchBanners 方法
  },
  methods: {
    async fetchBanners() {
      try {
        this.loading = true;
        const response = await getBanners(); // 调用 getBanners 函数
        if (response) {
          this.banners = response; // 将获取到的数据赋值给 banners
          this.$showMessage({
            content: "获取成功",
            type: "success",
            duration: 1500,
            container: document.getElementById("message-container"),
          });
        } else {
          // 如果响应为空，显示错误消息
          this.showError("获取横幅数据失败，请稍后重试。");
        }
      } catch (error) {
        // 捕获错误并显示错误消息
        this.showError("请求横幅数据时出错，请检查网络连接。");
        console.error("请求横幅数据时出错:", error); // 仍然在控制台输出错误信息
      }
    },
    showError(message) {
      showMessage({
        content: message,
        type: "error",
        duration: 1500,
        container: document.getElementById("message-container"), // 指定消息容器
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.app-container {
  .self-fill(fixed);
}
.aside {
  width: 250px;
  height: 100%;
}
.banner-container {
  display: flex;
  align-items: center;
  height: 100%;
  overflow-y: auto;
  position: relative;
  flex-direction: column;
}
#message-container {
  position: fixed;
  top: 50%;
  right: 50%;
  transform: translate(-50%, -50%); /* 使其真正居中 */
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  z-index: 10;
}
.banner {
  margin: 10px 0;
  text-align: center;
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.banner img {
  max-width: 100%;
  height: auto;
}
</style>
