<template>
  <div ref="container">
    容器宽度：{{ containerWidth }} 容器高度：{{ containerHeight }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      containerWidth: 0,
      containerHeight: 0,
    };
  },
  mounted() {
    this.containerWidth = this.$refs.container.clientWidth;
    this.containerHeight = this.$refs.container.clientHeight;
  },
  updated() {
    console.log("updated");
  },
};
</script>

<style></style>

<!-- 
在 Vue.js 中，`ref` 属性确实是用来直接引用 DOM 元素或子组件的。这种方式可以让开发者在需要时直接访问和操作这些元素或组件的实例。然而，这种做法在 Vue 的设计理念中并不是推荐的最佳实践，原因如下：

1. **数据驱动的视图**：Vue 的核心理念是通过数据驱动视图，鼓励使用数据绑定和计算属性来管理状态，而不是直接操作 DOM。直接操作 DOM 可能会导致视图与数据状态不一致，从而引发难以调试的问题。

2. **组件封装性**：使用 `ref` 直接操作子组件或 DOM 元素可能会破坏组件的封装性。组件应该通过 props 和事件来进行通信，而不是直接修改其内部状态或 DOM。这种做法可能导致组件之间的耦合度增加，降低了可维护性。

3. **生命周期管理**：直接操作 DOM 元素可能会忽略 Vue 的生命周期管理，导致在组件更新或销毁时出现意想不到的行为。

因此，虽然 `ref` 提供了直接访问 DOM 或子组件的能力，但在实际开发中，建议尽量避免这种做法，优先使用 Vue 提供的响应式数据绑定和事件机制来管理组件的状态和交互。这样可以更好地遵循 Vue 的设计理念，保持代码的清晰和可维护性。
-->
