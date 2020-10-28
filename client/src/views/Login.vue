<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
          <v-form 
            v-if="!loading"
            v-model="valid"
            @submit.prevent="login">
            <v-text-field
                v-model="user.username"
                :rules="usernameRules"
                label="Username"
                required
            ></v-text-field>
            <v-text-field
                v-model="user.password"
                :rules="passwordRules"
                label="Password"
                type="password"
                required
            ></v-text-field>
            <v-btn type="submit" :disabled="!valid">Log in</v-btn>
        </v-form>
        <v-progress-circular
          v-else
          indeterminate
          color="primary"
        ></v-progress-circular>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Login',
    data: (vm) => ({
        valid: false,
        user: {
            username: '',
            password: ''
        },
        usernameRules: [
            v => !!v || 'Username is required'
        ],
        passwordRules: [
            v => !!v || 'Password is required'
        ]
    }),

    computed: {
        ...mapState('auth', { loading: 'isAuthenticatePending' })
    },

    methods: {
      async login() {
        if (this.valid) {
          try {
          await this.$store.dispatch('auth/authenticate', {
            strategy: 'local',
            ...this.user
          })
          this.$router.push('/boards')
          } catch(e) {
            console.error('Authentication error', e)
          }
        }
      },
    }
}
</script>