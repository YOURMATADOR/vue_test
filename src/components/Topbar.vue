<template>
  <div class="main-navigation--container">
    <h1 class="main-navigation--title">title</h1>
    <md-tabs md-sync-route class="main-navigation">
      <md-tab id="tab-home" md-label="Producto" to="/producto" exact>Home Tab</md-tab>
      <md-tab id="tab-pages" md-label="Caracteristicas" to="/caracteristicas">
        Pages tab
        <p>Unde provident nemo reiciendis officia, possimus repellendus. Facere dignissimos dicta quis rem. Aliquam aspernatur dolor atque nisi id deserunt laudantium quam repellat.</p>
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
export default {
  name: "TabContent"
};
</script>
