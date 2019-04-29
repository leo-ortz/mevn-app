<template>
	<v-layout column>
		<v-flex xs6 offset-xs2>
			<panel title="Songs">
				<h3>Songs</h3>
        <v-btn flat dark class="primary" @click="navigateTo({name: 'songs-create'})">Create New Song</v-btn>
        <div
          v-for="song in songs"
          :key="song.id">
          Title: {{song.title}} -
          Artist: {{song.artist}} -
          Album: {{song.album}}
        </div>
			</panel>
		</v-flex>
	</v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'

export default {
	components: {
		Panel
	},
	data () {
      return {
        songs: null
      }
  },
  async mounted () {
    // do a reqeust to backend for all the songs
    this.songs = (await SongsService.getAllSongs()).data
    console.log('songs', this.songs)
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
</style>
