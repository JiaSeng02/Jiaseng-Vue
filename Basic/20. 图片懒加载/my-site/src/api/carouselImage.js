import request from "./request";

export async function getImages() {
  return await request.get("/api/carouselImage");
}
