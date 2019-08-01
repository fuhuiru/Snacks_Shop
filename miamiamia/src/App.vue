<template>
  <div id="app">
    <GlobalNav/>
    <div>
      <router-view></router-view>
    </div>
    <GlobalFooter/>
  </div>
</template>

<script>
import GlobalNav from "./components/GlobalNav";
import GlobalFooter from "./components/GlobalFooter";

export default {
  name: "app",
  components: {
    GlobalNav,
    GlobalFooter,

  }
};
</script>

<style>
</style>
