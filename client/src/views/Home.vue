<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-btn :to="{ name: 'SignUp' }" >Sign Up</v-btn>
        <v-btn :to="{ name: 'Login' }">Login</v-btn>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>
