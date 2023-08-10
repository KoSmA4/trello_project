<template>
  <div>
  <nav-bar :show-nav-bar="showNavBar"></nav-bar>

    <router-view></router-view>

  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";


export default {
  components: {NavBar},
  data() {
    return {
      showNavBar: true
    }
  },

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background-color: #2F5377;
}
</style>