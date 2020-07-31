<template>
  <div class="snippet fullsnip">
    <router-link class="snippet title" :to="'/blog/' + this.blog.id">{{this.blog.title}}</router-link>
    <div class="snippet content">
      <img class="snippet image" :src="this.blog.image" />
      <div class="snippet blogcontent" style="overflow: hidden">{{blog.content.split(" ").splice(0,50).join(" ")}}...</div>
    </div>
    <h3 class="snippet date">Posted on {{this.blog.date}}</h3>
    <p class="snippet tags">
      Tags:
      <a v-for="tag in this.blog.tags" :key="tag">{{tag}}, </a>
    </p>
    <hr>
  </div>
</template>

<script>
// import { markdown } from 'markdown'
export default {
  props: {
    blog: Object
  }
}
</script>

<style>
.snippet.fullsnip {
  min-height: 300px;
  height: fit-content;
  width: 100%;
  margin-top: 30x;
  margin-bottom: 30px;
  text-align: left;
}

.snippet.image {
  height: 200px;
  width: 200px;
  object-fit: cover;
}

.snippet.title {
  font-size: 35px;
  font-weight: 700;
  color: black;
}

.snippet.content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 100%;
  padding: 20px 0px 10px 0px;
  margin: 0px;
  height: 200px;
}

.snippet.blogcontent {
  text-align: left;
  padding: 0px 10px 10px 50px;
  margin: 0px;
  height: 190px;
  font-size: 21px;
  font-weight: 300;
}

.snippet.date {
  font-size: 15px;
  font-weight: 300;
  margin-top: 0px;
  margin-bottom: 0px;
}

.snippet.tags {
  font-size: 15px;
  font-weight: 300;
  margin-top: 0px;
  margin-bottom: 0px;
}
</style>
