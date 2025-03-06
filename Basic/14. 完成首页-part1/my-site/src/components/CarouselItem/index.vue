<template>
  <div class="carousel-item" :class="{ active: isActive }">
    <img :src="imgSrc" alt="carousel-image" />
  </div>
</template>

<script>
export default {
  props: {
    isActive: Boolean,
    imgSrc: String,
  },
};
</script>
<style scoped>
.carousel-item {
  width: 100%;
  height: 400px;
  display: none;
}
.carousel-item.active {
  display: block;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
