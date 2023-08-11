<template>
  <div class="container">
    <div class="auth">
      <h2>Авторизация</h2>
      <form action="">
        <p>Логин</p>
        <my-input placeholder="Введите ваш логин" v-focus/>
        <p>Пароль</p>
        <my-input placeholder="Введите ваш пароль"/>
        <my-button
            type="submit"

            style="padding: 8px 40px;"
          >Войти
        </my-button>
        <a @click="$router.push('/registration')">Регистрация</a>
      </form>
    </div>
  </div>

</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";
import MyInput from "@/components/UI/MyInput.vue";

export default {
  components: {MyInput, MyButton},
  data() {
    return {
      showNavBar: false
    }
  },

}
</script>

<style scoped>
.container{
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

form{
  display: flex;
  flex-direction: column;
}
h2{
  font-size: 28px;
  text-align: center;
  font-weight: 400;
  margin-bottom: 35px;
}
p{
  color: #626262;
  padding-bottom: 11px;
}
a{
  color: #626262;
  text-align: center;

}

</style>