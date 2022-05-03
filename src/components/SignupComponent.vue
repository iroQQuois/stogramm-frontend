<template>
  <form class="form _registr" @submit.prevent="handleSubmit">
    <div class="title_main">
      Регистрация
    </div>
    <div class="upload_foto _registr">
      <div class="sing_in">
        Есть аккаунт? - <a href="#">Войдите!</a>
      </div>
      <div class="input_foto_wrap _registr">
        <input id="foto" class="photo_input" type="file" name="photo" multiple accept="image/*">
        <label class="photo_input_label" for="foto"><img width="18" style="margin-right: 11px;"
                                                         src="../assets/img/upload_icon1.png" alt="">
          Загрузите фото
          профиля</label>
      </div>
      <div class="wrap_descript _registr">
        <input class="meta_input name" v-model="user.email" name="email" placeholder="Email">
        <input class="meta_input name" v-model="user.username" name="username" placeholder="username">
        <input class="meta_input name" v-model="user.firstName" name="firstName" placeholder="firstName">
        <input class="meta_input name" v-model="user.birthDate" name="birthDate" placeholder="birthDate">
        <input class="meta_input pass" v-model="user.password" name="password" type="password" placeholder="Пароль">
      </div>
    </div>
    <div class="btn_cantainer"><input class="btn" type="submit" :disabled="status.registering" value="Зарегистрироваться"></div>
    <img v-show="status.registering" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" alt="">

  </form>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: "SignupComponent",
  data () {
    return {
      user: {
        email: '',
        username: '',
        firstName: '',
        birthDate: '',
        password: ''
      },
      submitted: false
    }
  },
  computed: {
    ...mapState('account', ['status'])
  },
  methods: {
    ...mapActions('account', ['signup']),
    handleSubmit() {
      this.submitted = true;
      this.signup(this.user);
    }
  }
}
</script>

<style scoped>

</style>