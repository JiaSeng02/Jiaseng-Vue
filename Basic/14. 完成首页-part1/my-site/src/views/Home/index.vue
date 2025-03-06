<template>
  <div class="img-container" ref="carouselContainer">
    <div class="img-wrapper">
      <CarouselItem
        v-for="(image, index) in images"
        :key="image.id"
        :image="image"
        :isActive="index === activeIndex"
      />
    </div>
    <div class="control">
      <button @click="prevImage">Prev</button>
      <button @click="nextImage">Next</button>
    </div>
    <div class="indicators">
      <span
        v-for="(image, index) in images"
        :key="image.id"
        @click="activeIndex = index"
        :class="{ active: index === activeIndex }"
      >
        <!--If index === activeIndex, the active class is applied -->
        {{ index + 1 }}
      </span>
    </div>
  </div>
</template>

<script>
import CarouselItem from "@/components/CarouselItem";
import { getImages } from "@/api/carouselImage";

export default {
  components: {
    CarouselItem,
  },
  data() {
    return {
      images: [],
      activeIndex: 0,
    };
  },
  mounted() {
    //window.addEventListener("wheel", this.handleWheel);
    this.$refs.carouselContainer.addEventListener("wheel", this.handleWheel);
  },
  beforeDestroy() {
    //window.removeEventListener("wheel", this.handleWheel);
    this.$refs.carouselContainer.addEventListener("wheel", this.handleWheel);
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
          console.log("Success");
        } else {
          console.log("Fail to load data");
        }
      } catch (error) {
        console.log("Fail to request");
      }
    },
    handleWheel(event) {
      if (event.deltaY > 0) {
        this.nextImage();
      } else {
        this.prevImage();
      }
    },
    nextImage() {
      this.activeIndex = (this.activeIndex + 1) % this.images.length;
    },
    prevImage() {
      this.activeIndex =
        (this.activeIndex - 1 + this.images.length) % this.images.length;
    },
  },
};
</script>

<style>
.img-container {
  position: relative;
  width: 500px; /* Adjust size as needed */
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid;
}

.img-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.control {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.control button {
  margin: 0 10px;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  background: #007bff;
  color: white;
  border-radius: 5px;
  transition: 0.3s;
}

.control button:hover {
  background: #0056b3;
}

.indicators {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.indicators span {
  cursor: pointer;
  margin: 0 5px;
  font-size: 18px;
}

.indicators .active {
  font-weight: bold;
  color: #007bff;
}
</style>
