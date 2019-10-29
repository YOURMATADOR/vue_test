<template>
  <div class="main-navigation--container">
    <div class="main-navigation--top">
      <h1 class="main-navigation--title">{{name}}</h1>
      <md-button class="md-raised md-primary">GUARDAR</md-button>
    </div>
    <md-tabs md-sync-route class="main-navigation">
      <md-tab id="tab-home" md-label="Producto" to="/producto" exact>
        <div class="product-container">
          <template v-if="fetching">
            <md-progress-spinner md-mode="indeterminate" class="loading"></md-progress-spinner>
          </template>
          <template v-else>
            <Producto />
            <Imagenes_producto />
          </template>
        </div>
      </md-tab>
      <md-tab id="tab-pages" md-label="Caracteristicas" to="/caracteristicas">
        <Caracteristicas />
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
import Producto from "./Producto";
import Imagenes_producto from "./Imagenes_producto";
import Caracteristicas from "./Caracteristicas";
import { mapState } from "vuex";

export default {
  name: "TabContent",
  computed: mapState({
    fetching: state => state.Producto.fetching,
    name: state => state.Producto.name
  }),
  created() {
    this.$store.dispatch("_get_get_product");
  },
  components: {
    Producto,
    Imagenes_producto,
    Caracteristicas
  }
};
</script>
