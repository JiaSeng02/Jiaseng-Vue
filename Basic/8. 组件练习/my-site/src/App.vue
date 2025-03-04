<template>
  <div class="app-container">
    <h1>App组件</h1>
    
    <siteAside />
    <empty />
    <imageLoader />
    <pager />
    
    
  </div>
</template>

<script>
import siteAside from "./components/SiteAside/test.vue";
import pager from "./components/Pager/test.vue";
import empty from "./components/Empty/test.vue";
import imageLoader from "./components/ImageLoader/test.vue"

export default {
  components: {
    siteAside,
    pager,
    empty,
    imageLoader
  },
};
</script>

<style>
.app-container {
  overflow-y: scroll;
  height: 100vh;
}
</style>


