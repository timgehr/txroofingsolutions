<template>
  <div class="page bloghub">
    <div class="content bloghub" id="blogSnippetHub">
    <div v-for="blog in blogs" v-bind:key="blog">
      <blogsnippet :blog="blog"></blogsnippet>
    </div>
    </div>
  </div>
</template>

<script>
import db from '@/fb'
import blogsnippet from '../components/BlogPostSnip'

export default {
  components: {
    // eslint-disable-next-line
    blogsnippet
  },
  data () {
    return {
      id: this.$route.params.id,
      blogs: []
    }
  },
  created () {
    db.collection('blogs').orderBy('date', 'desc')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.blogs.push(doc.data())
        })
      })
  }
}
</script>

<style>

</style>
