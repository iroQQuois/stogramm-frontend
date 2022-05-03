<template>
  <div class="wrap">
    <header-component></header-component>
    <login-component></login-component>
  </div>
</template>

<script>
import LoginComponent from "@/components/LoginComponent";
import HeaderComponent from "@/components/HeaderComponent";
export default {
  name: "SignInView",
  components: {HeaderComponent, LoginComponent}
}
</script>

<style scoped>

</style>