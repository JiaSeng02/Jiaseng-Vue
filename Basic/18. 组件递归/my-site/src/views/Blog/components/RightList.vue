<template>
  <ul class="right-list-container">
    <li v-for="(item, i) in list" :key="i">
      <span @click="handleClick(item)" :class="{ active: item.isSelect }">
        {{ item.name }}
      </span>
      <!-- 显示当前组件 -->
      <RightList :list="item.children" @select="handleClick" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList",
  props: {
    // [ {name:"xxx", isSelect:true, children:[ {name:"yyy", isSelect: false} ] } ]
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClick(item) {
      this.clearSelection(this.list);
      item.isSelect = true;
      this.$emit("select", item);
    },
    clearSelection(list) {
      list.forEach((item) => {
        item.isSelect = false;
        if (item.children) {
          this.clearSelection(item.children);
        }
      });
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.right-list-container {
  list-style: none;
  padding: 0;
  .right-list-container {
    margin-left: 1em;
  }
  li {
    min-height: 40px;
    line-height: 40px;
    cursor: pointer;
    .active {
      color: @warn;
      font-weight: bold;
    }
  }
}
</style>
