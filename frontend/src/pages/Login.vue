<template>
  <div class="container">
    <div class="auth">
      <form @submit.prevent="login" action="">
        <h2>Авторизация</h2>
        <p>Логин</p>
        <input placeholder="Введите ваш логин" v-model="form.username" v-focus/>
        <p>Пароль</p>
        <input placeholder="Введите ваш пароль" v-model="form.password"/>
        <my-button
            style="padding: 8px 40px;"
        >Войти
        </my-button>
        <!--Вот тут обрабатыва ошибки до запроса на сервер-->
        <div v-if="errors" class="errors">
          <p v-for="(error, field) in errors" :key="field">
            {{ error[0] }}
          </p>
        </div>

      </form>
      <router-link to="/registration" class="link">Регистрация</router-link>
    </div>
  </div>

</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";
import MyInput from "@/components/UI/MyInput.vue";
import axios from "axios";
import authService from "@/services/auth.service";

export default {
  components: {MyInput, MyButton},
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: ""
      },

      errors: null
    }
  },
  methods: {
    async login() {
      const {success, errors} = await authService.login(this.form);
      if (success) {
        this.$router.push({name: 'home'})
      } else {
        this.errors = errors;
      }
    }
  }
}
</script>

<style scoped>
.container {
//height: 89vh; display: flex;
  align-items: center;
  justify-content: center;
}

.auth {
  padding: 30px 50px;
  color: #123456;
  height: 550px;
  width: 375px;
  background-color: #F5F5F5;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

form {
  display: flex;
  flex-direction: column;
}

input {
  background-color: #F5F5F5;
  border: none;
  padding-bottom: 8px;
  margin-bottom: 24px;
  border-bottom: 2px solid #515151;
  font-size: 16px;
}

input:focus {
  outline: none;
}

h2 {
  font-size: 28px;
  text-align: center;
  font-weight: 400;
  margin-bottom: 35px;
}

p {
  color: #626262;
  font-size: 18px;
  padding-bottom: 11px;
}

.link {
  color: #626262;
  text-align: center;
}

.errors {
//margin-bottom: 15px; padding: 15px 15px; color: #fff;
  border-radius: 6px;
  font-size: 14px;
  text-align: center;
}

.errors p {
  color: #cc3131;
  margin: 0 -10px;
  padding-bottom: 0;

}

.errors p:nth-child(1) {
  padding-bottom: 6px;
}


</style>