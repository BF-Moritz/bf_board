<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-progress-circular
          v-if="loading"
          indeterminate
          color="primary"
        ></v-progress-circular>
        <pre v-if="!loading">
          {{boards}}
        </pre>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'Boards',
  data: () => ({
  }),

  computed: {
    ...mapState('boards', { loading: 'isFindPending' }),
    ...mapGetters('boards', { findBoardsInStore: 'find' } ),
    boards () {
       return this.findBoardsInStore().data
    }
  },

  methods: {
    ...mapActions('boards', { findBoards: 'find' } )
  }
}
</script>