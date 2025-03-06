<template>
  <div class="sideAside-test-container">
    <SiteAside />
  </div>
</template>

<script>
import SiteAside from ".";
import "@/styles/global.less";
export default {
  components: {
    SiteAside,
  },
};
</script>

<style>
.sideAside-test-container {
  width: 250px;
  height: 600px;
  border: 2px solid;
  margin: 10px;
}
</style>
