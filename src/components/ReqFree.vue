<template>
  <div class="reqfree">
    <h2>
      Request Your Free, No-Obligation Roofing Inspection
    </h2>
    <button class="big-button" v-on:click="$router.push('free-inspection')">GET SCHEDULED!</button>
  <hr>
  </div>
</template>

<script>
export default {
  name: 'ReqFree'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.reqfree {
  padding: 20px 0px 0px 0px;
}

.reqfree h2 {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-style: italic;
}

.reqfree hr {
  margin-bottom: 0px;
  margin-top: 30px;
}

</style>
