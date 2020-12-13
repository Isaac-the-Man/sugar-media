<template>
  <div>
    <div id="app" class="container py-5">
      <b-row align-h="center">
        <b-col cols="8" class="text-center">
          <img alt="Vue logo" src="./assets/logo.png">
          <h1 class="display-3">Sugar & Media</h1>
        </b-col>
      </b-row>
      <router-view/>
      <AppFooter></AppFooter>
    </div>

  </div>
</template>

<script>
import AppFooter from "@/components/AppFooter";

export default {
  name: 'App',
  components: {
    AppFooter
  }
}
</script>