<template>
  <div class="images-product-container">
      <h2>Imagenes</h2>
    <img v-for="image in images" :key="image.id" :src="image.url" alt="image.id" class="product-image"/>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Imagenes_producto",
  computed: mapState({
    images: state => state.Producto.images
  })
};
</script>