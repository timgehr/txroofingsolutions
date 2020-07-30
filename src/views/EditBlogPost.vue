<template>
  <div class="page makeblogpost">
    <div class="content makeblogpost">
      <div class="blogContainer" id="blogEditor">
        <input id="blog_postURL" class="blog imageURL" placeholder="Create a custom post url e.g. roof-replacement-quotes" v-model="myPostID"/>
        <input id="blog_imageURL" class="blog imageURL" placeholder="Paste image URL here"/>
        <input id="blog_tags" class="blog tags" placeholder="Enter, tags, like, this"/>
        <input id="blog_title" class="blog title" placeholder="Post Title"/>
        <textarea id="blog_content"
          class="blog markdown"
          placeholder="Blog content goes here

Type a header like #this

Type a sub-header like ##this

to make a link [put your text here](and your link here)

to make a list
* use
* these
* stars"
        ></textarea>
      </div>
      <button class="big-button" v-on:click="publish">Publish Blog</button>
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
      myPostID: this.$route.params.id,
      id: this.$route.params.id
    }
  },
  methods: {
    publish () {
      const imageURL = document.getElementById('blog_imageURL')
      const tags = document.getElementById('blog_tags')
      const title = document.getElementById('blog_title')
      const content = document.getElementById('blog_content')

      db.collection('blogs')
        .doc(this.myPostID)
        .set({
          title: title.value,
          date: new Date(),
          blogContent: content.value,
          imageURL: imageURL.value,
          tags: tags.value.split(', ')
        })
        .then(function (docRef) {
          console.log('Document written with ID: ', this.blogPost.title)
        })
        .catch(function (error) {
          console.error('Error adding document: ', error)
        })
    }
  },
  mounted () {
    document.getElementById('blog_postURL').value = this.id
    const imageURL = document.getElementById('blog_imageURL')
    const tags = document.getElementById('blog_tags')
    const title = document.getElementById('blog_title')
    const content = document.getElementById('blog_content')

    function renderBlog (doc) {
      if (doc.title !== undefined) {
        imageURL.value = doc.imageURL
        tags.value = doc.tags.join(', ')
        title.value = doc.title
        content.value = doc.blogContent
      }
    }

    db.collection('blogs')
      .doc(this.id)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          console.log('blog retrieved')
          renderBlog(doc.data())
        } else {
          console.log('No such document!')
        }
      })
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
