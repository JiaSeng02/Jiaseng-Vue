<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <template #default>
        <RouterView />
        <div id="message-container"></div>
        <button @click="showErrorMsg">显示错误信息</button>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./components/Layout";
import SiteAside from "./components/SiteAside";
import showMessage from "./utils/showMessage";
export default {
  components: {
    Layout,
    SiteAside,
  },
  mounted() {
    // Trigger a test message when the component loads
    showMessage({
      content: "Hello! This is a test message.", // 消息内容
      type: "success", // 消息类型（info, error, success, warn）
      duration: 3000, // 消息显示的时间（毫秒）
      container: document.getElementById("message-container"), // 指定容器
      callback: () => {
        console.log("消息已消失"); // 消息消失后的回调函数
      },
    });
  },
  methods: {
    showErrorMsg() {
      showMessage({
        content: "Error!!",
        type: "error",
        duration: 3000,
        container: document.getElementById("message-container"),
        callback: () => {
          console.log("Error Gone");
        },
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
</style>
