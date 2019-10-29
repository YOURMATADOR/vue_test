<template>
  <div class="product-form-container">
    <h2>General</h2>
      <md-field>
        <label>Nombre</label>
        <md-input :value="long_name" @input="(e)=>set_value_input(e,'long_name')"></md-input>
      </md-field>
      <md-field>
        <label>Modelo</label>
        <md-input :value="model" @input="(e)=>set_value_input(e,'model')"></md-input>
      </md-field>
      <md-field>
        <label>Marca</label>
        <md-input :value="brand" @input="(e)=>set_value_input(e,'brand')"></md-input>
      </md-field>
      <md-field>
        <label>Descripcion</label>
        <md-textarea
          :value="plain_description"
          @input="(e)=>set_value_input(e,'plain_description')"
        ></md-textarea>
      </md-field>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Producto",
  computed: mapState({
    long_name: state => state.Producto.long_name,
    plain_description: state => state.Producto.plain_description,
    model: state => state.Producto.model,
    brand: state => state.Producto.brand,
  }),
  
  props: {
    msg: String
  },
  methods: {
    set_value_input: function(value, e) {
      this.$store.dispatch("_compare_and_set_value", {
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
