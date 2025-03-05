<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <template #default>
        <div class="message-side">
          <message />
        </div>
        <layout2 />
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./components/Layout";
import SiteAside from "./components/SiteAside";
import message from "./components/Message/test.vue";
import layout2 from "./components/Layout2/test.vue";
export default {
  components: {
    Layout,
    SiteAside,
    message,
    layout2,
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
