<template>
  <div class="empty-test-container">
    <Empty />
  </div>
</template>

<script>
import Empty from ".";
export default {
  components: {
    Empty,
  },
};
</script>

<style>
.empty-test-container {
  width: 500px;
  height: 400px;
  border: 2px solid;
  margin: 0 auto;
  position: relative;
}
</style>
