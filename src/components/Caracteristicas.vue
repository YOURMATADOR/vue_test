<template>
  <div class="product-attr-container">
    <div class="product-dim-element">
      <h2>Dimensiones</h2>
      <div class="product-dim-input--list">
        <md-field>
          <label>Largo</label>
          <md-input :value="length" @input="(e)=>set_value_input(e,'length')"></md-input>
        </md-field>
        <md-field>
          <label>Alto</label>
          <md-input :value="height" @input="(e)=>set_value_input(e,'height')"></md-input>
        </md-field>
        <md-field>
          <label>Ancho</label>
          <md-input :value="width" @input="(e)=>set_value_input(e,'width')"></md-input>
        </md-field>
        <md-field>
          <label for="distance_unit">Unidades</label>
          <md-select v-model="distance_unit" name="distance_unit" id="distance_unit">
            <md-option value="cm">Centimetros</md-option>
            <md-option value="m">Metros</md-option>
          </md-select>
        </md-field>
      </div>
      <div class="product-dim-input--list margin-top">
        <md-field>
          <label>Peso</label>
          <md-input :value="weight" @input="(e)=>set_value_input(e,'weight')"></md-input>
        </md-field>
        <md-field>
          <label for="mass_unit">Unidades</label>
          <md-select v-model="mass_unit" name="mass_unit" id="mass_unit">
            <md-option value="kg">Kilogramos</md-option>
            <md-option value="ml">Miligramos</md-option>
          </md-select>
        </md-field>
      </div>
    </div>
    <div class="product-attr-element">
      <h2>Atributos</h2>
      <div class="product-attr-input--list">
        <md-field>
          <label for="unidades">Talla</label>
          <md-select v-model="sizes" name="sizes" id="sizes">
            <md-option :value="size" v-for="size in sizes" :key="size">{{size}}</md-option>
          </md-select>
        </md-field>
        <md-field>
          <label for="color">Color</label>
          <md-select v-model="colors" name="colors" id="colors">
            <md-option :value="color" v-for="color in colors" :key="color">{{color}}</md-option>
          </md-select>
        </md-field>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Caracteristicas",
  computed: mapState({
    length: state => state.Producto.length,
    height: state => state.Producto.height,
    width: state => state.Producto.width,
    distance_unit: state => state.Producto.distance_unit,
    weight: state => state.Producto.weight,
    mass_unit: state => state.Producto.mass_unit,
    colors: state =>
      [
        state.Producto.applied_attributes[1].value,
        ...state.Producto.variants.map(i => i.applied_attributes[0].value)
      ].filter((e, i, self) => self.indexOf(e) === i),
    sizes: state =>
      [
        state.Producto.applied_attributes[0].value,
        ...state.Producto.variants.map(i => i.applied_attributes[1].value)
      ].filter((e, i, self) => self.indexOf(e) === i)
  }),

  props: {
    msg: String
  },
  methods: {
    set_value_input: function(value, e) {
      this.$store.dispatch("_set_product_value", {
        value,
        input: e
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
