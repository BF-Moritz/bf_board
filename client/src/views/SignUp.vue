<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
          <v-form 
            v-if="!loading"
            v-model="valid"
            @submit.prevent="signUp">
            <v-text-field
                v-model="user.username"
                :rules="usernameRules"
                label="Username"
                required
            ></v-text-field>
            <v-text-field
                v-model="user.displayName"
                :rules="displayNameRules"
                label="Display Name"
                required
            ></v-text-field>
            <v-text-field
                v-model="user.password"
                :rules="passwordRules"
                label="Password"
                type="password"
                required
            ></v-text-field>
            <v-text-field
                v-model="user.confirmPassword"
                :rules="confirmPasswordRules"
                label="Confirm Password"
                type="password"
                required
            ></v-text-field>
            <v-text-field
                v-model="user.imageURL"
                :rules="urlRules"
                label="Image URL"
                required
            ></v-text-field>
            <v-btn type="submit" :disabled="!valid">Sign Up</v-btn>
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
    name: 'Signup',
    data: (vm) => ({
        valid: false,
        user: {
            username: '',
            password: '',
            confirmPassword: '',
            displayName: '',
            imageURL: '',
        },
        usernameRules: [
            v => !!v || 'Username is required',
            v => v.length >= 5 || 'Username must be at least 5 characters'
        ],
        passwordRules: [
            v => !!v || 'Password is required',
            v => v.length >= 4 || 'Password must be at least 8 characters'
        ],
        confirmPasswordRules: [
            v => v === vm.user.password || 'Password must match'
        ],
        displayNameRules: [
            v => !!v || 'Display Name is required'
        ],
        urlRules: [
            v => !!v || 'URL is required'
        ]
    }),

    computed: {
        ...mapState('users', { loading: 'isCreatePending' })
    },

    methods: {
        async signUp() {
            if (this.valid) {
                const { User } = this.$FeathersVuex.api;
                const user = new User(this.user)
                let u = await user.save()
                this.$router.push('/login')
            }
        }
    }
}
</script>