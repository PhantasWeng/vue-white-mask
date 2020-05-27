<template>
<div>
  <div @click="test">test</div>
  <router-view></router-view>
  <vue-progress-bar></vue-progress-bar>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  methods: {
    test () {
      this.$Progress.start()
      axios({
        url: 'https://blog.owlting.com/wp-json/wp/v2/posts?page=1&per_page=6&_embed',
        method: 'get',
        crossDomain: true
      }).then((response) => {
        this.$Progress.finish()
      }, (response) => {
        this.$Progress.fail()
      })
    }
  },
  created () {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start()
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        const meta = to.meta.progress
        // parse meta tags
        this.$Progress.parseMeta(meta)
      }
      //  start the progress bar
      this.$Progress.start()
      //  continue to next page
      next()
    })
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach((to, from) => {
      //  finish the progress bar
      this.$Progress.finish()
    })
  },
  mounted () {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    this.$Progress.finish()
  }
}
</script>
