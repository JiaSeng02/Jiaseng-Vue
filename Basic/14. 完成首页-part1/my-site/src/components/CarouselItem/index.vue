<template>
  <div class="img-item" :class="{ active: isActive }">
    <img :src="image.img" alt="carousel image" />
  </div>
</template>

<script>
export default {
  props: {
    image: Object, // Receive a single image object
    isActive: Boolean, // Determine if this image is active
  },
};
</script>

<style>
.img-item {
  transition: opacity 0.5s ease-in-out;
  display: none;
  align-items: center;
  overflow-y: auto;
  position: absolute;
  flex-direction: column;
  justify-content: center;
}
.img-item img {
  max-width: 50%;
  height: auto;
}
.img-item.active {
  display: flex; /* Show only the active image */
}
</style>
