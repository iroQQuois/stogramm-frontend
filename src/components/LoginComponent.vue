<template>
  <form class="form _registr" @submit.prevent="handleSubmit">
    <div class="title_main">
      Вход
    </div>
    <div class="upload_foto _registr">
      <div class="sing_in">
        Нет аккаунта? - <a href="#">Зарегистрируйтесь!</a>
      </div>
      <div class="wrap_descript _login">
        <input class="meta_input name" v-model="username" name="username" placeholder="Никнейм">
        <input class="meta_input" v-model="password" name="password" type="password" placeholder="Пароль">
      </div>
    </div>
    <div class="btn_cantainer"><input class="btn" type="submit" value="Войти"></div>
  </form>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "LoginComponent",
  data () {
    return {
      username: '',
      password: '',
      submitted: false
    }
  },
  computed: {
    ...mapState('account', ['status'])
  },
  created () {
    // reset login status
    this.logout();
  },
  methods: {
    ...mapActions('account', ['login', 'logout']),
    handleSubmit () {
      this.submitted = true;
      const { username, password } = this;
      if (username && password) {
        this.login({ username, password })
      }
    }
  }
}
</script>

<style scoped>

</style>