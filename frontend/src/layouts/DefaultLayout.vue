<template>
  <div>
    <nav-bar :user = "user"/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import authService from "@/services/auth.service";

export default {
  components: {NavBar},
  data(){
    return {
      user: {},
    }
  },
  async mounted() {
    this.user = await authService.getCurrentUser();
  }
}
</script>

<style scoped>

</style>