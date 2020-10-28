<template>
  <v-app>
    <v-app-bar app dense>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>BF_Board</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text v-if="!user" :to="{ name: 'SignUp' }" >Sign Up</v-btn>
        <v-btn text v-if="!user" :to="{ name: 'Login' }">Login</v-btn>
        <v-btn text v-if="user" @click="logout">Logout</v-btn>
      </v-toolbar-items>
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
import { mapActions, mapState } from 'vuex'

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    drawer: null,
    fixed: true
  }),

  computed: {
    ...mapState('auth', { user: 'payload' })
  },

  methods: {
    ...mapActions('auth', { authLogout: 'logout' }),

    logout() {
      this.authLogout().then(() => this.$router.push('/login'))
    }
  }
};
</script>
