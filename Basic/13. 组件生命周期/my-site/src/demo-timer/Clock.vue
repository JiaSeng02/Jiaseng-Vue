<template>
  <h1>当前时间：{{ current }}</h1>
</template>

<script>
export default {
  data() {
    return {
      current: this.getCurrent(),
      timer: null,
    };
  },
  methods: {
    getCurrent() {
      return new Date().toLocaleTimeString();
    },
  },
  // created 钩子：
  // 在组件实例被创建后立即调用，此时数据已经设置，但组件尚未挂载到 DOM
  created() {
    console.log("created");
    this.timer = setInterval(() => {
      console.log("更新了时间");
      this.current = this.getCurrent();
    }, 1000); // 这里使用 setInterval 每秒钟调用一次 getCurrent 方法，更新 current 属性的值，从而实现实时显示当前时间。这个钩子是一个合适的地方来启动定时器，因为此时组件已经准备好处理数据。
  },
  // destroyed 钩子：
  // 在组件实例被销毁之前调用，此时可以进行清理操作
  destroyed() {
    clearInterval(this.timer);
  }, // 这里使用 clearInterval 来停止之前设置的定时器，防止内存泄漏和不必要的资源消耗。这是一个良好的实践，确保在组件不再需要时，清理所有的定时器和事件监听器。
};
</script>

<style></style>
