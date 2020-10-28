<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>BF_Board</v-toolbar-title>
      <v-btn class="ml-auto" :to="{ name: 'SignUp' }" >Sign Up</v-btn>
      <v-btn class="ml-4" :to="{ name: 'Login' }">Login</v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <!--  -->
    </v-navigation-drawer>

    <v-main class="grey lighten-2">
      <router-view />
    </v-main>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2020 - Made with 💙 by BF_Moritz</span>
    </v-footer>
  </v-app>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    drawer: null,
    fixed: true
  }),

  methods: {
    ...mapActions('auth', ['authenticate'])
  }
};
</script>
