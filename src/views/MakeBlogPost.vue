<template>
  <div class="page makeblogpost">
    <div class="content makeblogpost">
      <div class="blogContainer" id="blogEditor">
        <input class="blog imageURL" placeholder="Create a custom post url e.g. roof-replacement-quotes" v-model="myPostID" />
        <input class="blog imageURL" placeholder="Paste image URL here" v-model="blogPost.imageURL" />
        <input class="blog tags" placeholder="Enter, tags, like, this" v-model="tags" />
        <input class="blog title" placeholder="Post Title" v-model="blogPost.title" />
        <textarea
          class="blog markdown"
          placeholder="Blog content goes here

Type a header like #this

Type a sub-header like ##this

to make a link [put your text here](and your link here)

to make a list
* use
* these
* stars"
          v-model="blogPost.blogContent"
        ></textarea>
      </div>
      <button class="big-button" v-on:click="submit">Publish Blog</button>
      <br />
      <a
        href="https://guides.github.com/features/mastering-markdown/"
        class="mdGuide"
        style="line-height: 40px;"
      >Click here for a guide on using markdown</a>
    </div>
  </div>
</template>

<script>
import db from '@/fb'

export default {
  data () {
    return {
      markdownContent: '',
      tags: '',
      blogPost: {
        title: '',
        date: null,
        content: '',
        imageURL: '',
        tags: []
      }
    }
  },
  methods: {
    submit () {
      this.blogPost.tags = this.tags.split(', ')
      this.blogPost.date = new Date().toLocaleDateString()

      var postID = this.blogPost.title
        .replace(/\s+/g, '-')
        .toLowerCase()
        .replace(/[^\w\s]/gi, '')
      db.collection('blogs')
        .doc(postID)
        .set({
          title: this.blogPost.title,
          date: this.blogPost.date,
          content: this.blogPost.content,
          image: this.blogPost.imageURL,
          tags: this.blogPost.tags
        })
        .then(function (docRef) {
          console.log('Document written with ID: ', this.blogPost.title)
        })
        .catch(function (error) {
          console.error('Error adding document: ', error)
        })
    }
  }
}
</script>

<style>
#publish .append {
  font-weight: 400px;
  font-size: 12px;
  color: rgb(0, 173, 78);
  background: none;
  border: none;
}
.append:focus {
  outline: none;
}
.append:hover {
  cursor: pointer;
  color: rgb(0, 216, 97);
}

.blogContainer {
  text-align: left;
}

.blog {
  border: 0px;
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
}

.blog:focus {
  outline: 0px;
}

.blogContainer:focus {
  outline: 0px;
}

.blog.title {
  text-align: center;
  font-size: 45px;
  font-weight: 700;
}

.blog.markdown {
  font-size: 16px;
  height: 600px;
  resize: none;
}

::placeholder {
  color: rgb(180, 180, 180);
}

:-ms-input-placeholder {
  color: rgb(180, 180, 180);
}

::-ms-input-placeholder {
  color: rgb(180, 180, 180);
}
</style>
