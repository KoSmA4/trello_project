<template>
  <div class="container">
    <div class="auth">
      <h2>Регистрация</h2>
      <form @submit.prevent>
        <p>Логин</p>
        <my-input
            placeholder="Введите ваш логин"

            id="name"
            v-model="user.login"
            v-focus/>

        <p>Пароль</p>
        <my-input
            placeholder="Введите ваш пароль"
            id="password"
            v-model="user.password"/>
        <p>Подтвердите пароль</p>
        <my-input
            placeholder="Подтвердите ваш пароль"
            id="password_confirmation"/>
        <my-button
            @click="registerUser"
            type="submit"
            style="margin-bottom: 70px;"
        >Зарегистрироваться</my-button>
        <a @click.stop="$router.push('/authorization')">Вход</a>
      </form>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";
import MyInput from "@/components/UI/MyInput.vue";
import axios from "axios";
export default {
  components: {MyInput, MyButton},
  data() {
    return {
      user: {
        login: '',
        password: '',
      }
    };
  },
  methods: {
    registerUser(){
      // Куда запрос, какие данные отправляются
      fetch("http://localhost/yii2_course.loc/web/index.php?r=country/response",{
        method: "POST",
        header: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(this.user)
      })
          .then(response => response.text())
          .then(response => {
            console.log(response)
          })
    }
    // async registerUser() {
    //   if (!this.user.login || !this.user.password) {
    //     console.log('Заполните все поля');
    //     return;
    //   }
    //   const url = "http://trelloproject.p/backend/web/index.php?r=users%2Fregister";
    //   const headers = {
    //     "Content-Type": "application/json",
    //   };
    //   const body = JSON.stringify(this.user);
    //   console.log(body)
    //   try {
    //     const response = await fetch(url, {
    //       method: "POST",
    //       headers,
    //       body,
    //     });
    //
    //     const responseData = await response.text();
    //     console.log("Ответ от сервера:", responseData);
    //   } catch (error) {
    //     console.error("Ошибка при регистрации:", error);
    //   }
    // },

  },

}
</script>

<style scoped>
.container {
  height: 91vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.auth {
  padding: 30px 50px;
  color: #123456;
  height: 500px;
  width: 350px;
  background-color: #F5F5F5;
  border-radius: 15px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.81);
}

form {
  display: flex;
  flex-direction: column;
}

h2 {
  font-size: 28px;
  text-align: center;
  font-weight: 400;
  margin-bottom: 35px;
}

p {
  color: #626262;
  padding-bottom: 11px;
}

a {
  color: #626262;
  text-align: center;

}
</style>