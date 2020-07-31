<template>
  <div class="page blogpost">
    <div class="content blogpost" id="thisBlog"></div>
  </div>
</template>

<script>
import db from '@/fb'
import { markdown } from 'markdown'
export default {
  data () {
    return {
      id: this.$route.params.id,
      blog: {
        title: 'No Such Blog Exists',
        content:
          "<p> Sorry, but the blog you're looking for does not exist.</p>",
        date: null
      }
    }
  },
  methods: {},
  mounted () {
    const blog = document.getElementById('thisBlog')

    function renderBlog (doc) {
      if (doc.title !== undefined) {
        const content = document.createElement('div')
        content.setAttribute('class', 'blogContent')
        const title = document.createElement('h1')
        const image = document.createElement('img')
        image.setAttribute('src', doc.image)
        image.setAttribute('class', 'blogImage')

        title.innerText = doc.title
        content.innerHTML = markdown.toHTML(doc.content)
        blog.append(image)
        blog.append(title)
        blog.append(content)
      }
    }

    db.collection('blogs')
      .doc(this.id)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          console.log('blog retrieved')
          console.log(doc.data())
          renderBlog(doc.data())
        } else {
          console.log('No such document!')
        }
        renderBlog(doc)
      })
  }
}
</script>

<style>
.blogContent {
  width: 100%;
  padding-top: 380px;
  text-align: left;
  line-height: 27px;
}

.content.blogpost h1 {
  color: rgb(255, 255, 255);
  text-shadow: 0px 0px 8px black;
  width: calc(100% - 20px);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 160px;
  left: 0px;
  height: 400px;
  background: rgba(0, 0, 0, 0.473);
  margin: 0px 0px 0px 0px;
  z-index: -1;
  padding: 0px 10px 0px 10px;
}

.blogContent h1 {
  font-size: 30px;
  color: black !important;
}

.blogContent p {
  font-size: 18px;
  font-weight: 300;
}

.blogImage {
  width: 100vw;
  position: absolute;
  top: 160px;
  right: 0px;
  height: 400px;
  object-fit: cover;
  z-index: -2;
}
</style>
