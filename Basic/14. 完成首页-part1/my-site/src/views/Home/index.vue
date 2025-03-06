<template>
  <div class="img-container">
    <div v-for="image in images" :key="image.id" class="image">
      <img :src="image.img" alt="carousel image" />
    </div>
  </div>
</template>

<script>
import { getImages } from "@/api/carouselImage";
export default {
  data() {
    return {
      images: [],
    };
  },
  async created() {
    await this.fetchImages();
  },
  methods: {
    async fetchImages() {
      try {
        const response = await getImages();
        if (response) {
          this.images = response;
          console.log("Successs");
        } else {
          console.log("Fail to load data");
        }
      } catch (error) {
        console.log("Fail to request");
      }
    },
  },
};
</script>

<style>
.img-container {
  display: flex;
  align-items: center;
  height: 100%;
  overflow-y: auto;
  position: relative;
  flex-direction: column;
}
.image img {
  max-width: 50%;
  height: auto;
}
</style>
