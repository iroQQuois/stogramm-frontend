<template>
  <div class="wrap">
    <header-component></header-component>
    <signup-component></signup-component>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import SignupComponent from "@/components/SignupComponent";
export default {
  name: "SignupView",
  components: {SignupComponent, HeaderComponent}
}
</script>

<style scoped>

</style>