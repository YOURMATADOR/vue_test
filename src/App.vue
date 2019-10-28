<template>
  <div id="app">
    <Topbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Topbar from "./components/Topbar.vue";
export default {
  name: "app",
  components: {
    Topbar
  }
};
</script>

