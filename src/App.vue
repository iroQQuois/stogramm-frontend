<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapState({
      alert: state => state.alert
    })
  },
  methods: {
    ...mapActions({
      clearAlert: 'alert/clear'
    })
  },
  watch: {
    $route (){
      // clear alert on location change
      this.clearAlert();
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Sarala:wght@400;700&display=swap');

</style>
