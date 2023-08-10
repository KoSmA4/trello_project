<template>
  <div class="navbar" v-if="showNavBar">
    <div class="navbar__btns" @click="$router.push('/')">
      <button @click.stop="$router.push('/client')">Клиенты</button>
      <button @click.stop="$router.push('/working-space')">Рабочее пространство</button>
      <button @click.stop="$router.push('/authorization')">Авторизация</button>
    </div>
  </div>
</template>

<script>
import router from "@/router/router";

export default {
  methods: {
    getRouter() {
      return router;
    },
    navigateToRoute(route) {
      this.getRouter().push(route);
    },

  },
  props: {
    showNavBar: {
      type: Boolean,
      default: true
    }
  },

}
</script>

<style scoped>


.navbar {
  width: 100%;
  background-color: #123456;
}

.navbar__btns {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

button {
  width: 131px;
  background-color: #123456;
  border: none;
  color: #f1f1f1;
  font-size: 15px;
  padding: 8px;
}

button:hover {
  cursor: pointer;
}
</style>